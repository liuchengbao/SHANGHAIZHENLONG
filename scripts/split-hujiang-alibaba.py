#!/usr/bin/env python3
"""将沪匠铝艺 PDF 页面拆成单个 1000×1000 阿里巴巴主图。"""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path

from PIL import Image

PAGES_DIR = Path(__file__).resolve().parent.parent / "public/hujiang-pdf/pages"
OUT_DIR = Path(__file__).resolve().parent.parent / "public/hujiang-alibaba"
SIZE = 1000
HEADER = 115
FOOTER = 40
MARGIN = 28
CONTENT_THRESHOLD = 680
MIN_PANEL = 320
MIN_RATIO = 0.14
SKIP_PAGES = {1}  # 封面


def is_content(px, x: int, y: int) -> bool:
    r, g, b = px[x, y]
    return r + g + b < CONTENT_THRESHOLD


def content_ratio(im: Image.Image, box: tuple[int, int, int, int], step: int = 4) -> float:
    x0, y0, x1, y1 = box
    if x1 <= x0 or y1 <= y0:
        return 0.0
    px = im.load()
    total = content = 0
    for y in range(y0, y1, step):
        for x in range(x0, x1, step):
            total += 1
            if is_content(px, x, y):
                content += 1
    return content / total if total else 0.0


def projection_gaps(
    im: Image.Image,
    box: tuple[int, int, int, int],
    horizontal: bool,
    min_gap: int = 14,
    low_ratio: float = 0.022,
) -> list[int]:
    x0, y0, x1, y1 = box
    px = im.load()
    step = 3
    gaps: list[tuple[int, int]] = []
    start = None

    if horizontal:
        length = y1 - y0
        for i, y in enumerate(range(y0, y1)):
            score = sum(1 for x in range(x0, x1, step) if is_content(px, x, y))
            low = score < (x1 - x0) / step * low_ratio
            if low:
                if start is None:
                    start = i
            elif start is not None and i - start >= min_gap:
                gaps.append((start, i))
                start = None
    else:
        length = x1 - x0
        for i, x in enumerate(range(x0, x1)):
            score = sum(1 for y in range(y0, y1, step) if is_content(px, x, y))
            low = score < (y1 - y0) / step * low_ratio
            if low:
                if start is None:
                    start = i
            elif start is not None and i - start >= min_gap:
                gaps.append((start, i))
                start = None

    centers = []
    for a, b in gaps:
        if horizontal:
            centers.append(y0 + (a + b) // 2)
        else:
            centers.append(x0 + (a + b) // 2)
    return centers


def build_grid(
    im: Image.Image,
    box: tuple[int, int, int, int],
) -> list[tuple[int, int, int, int]]:
    x0, y0, x1, y1 = box
    xs = [x0] + projection_gaps(im, box, horizontal=False) + [x1]
    ys = [y0] + projection_gaps(im, box, horizontal=True) + [y1]
    xs = sorted(set(xs))
    ys = sorted(set(ys))

    cells: list[tuple[int, int, int, int]] = []
    for j in range(len(ys) - 1):
        for i in range(len(xs) - 1):
            cell = (xs[i], ys[j], xs[i + 1], ys[j + 1])
            w, h = cell[2] - cell[0], cell[3] - cell[1]
            if w < MIN_PANEL or h < MIN_PANEL:
                continue
            if content_ratio(im, cell) >= MIN_RATIO:
                cells.append(cell)
    return cells


def trim_white(im: Image.Image, threshold: int = 235) -> Image.Image:
    arr = im.load()
    iw, ih = im.size
    top, bottom, left, right = 0, ih, 0, iw
    for y in range(ih):
        if any(sum(arr[x, y]) < threshold * 3 for x in range(iw)):
            top = y
            break
    for y in range(ih - 1, -1, -1):
        if any(sum(arr[x, y]) < threshold * 3 for x in range(iw)):
            bottom = y + 1
            break
    for x in range(iw):
        if any(sum(arr[x, y]) < threshold * 3 for y in range(ih)):
            left = x
            break
    for x in range(iw - 1, -1, -1):
        if any(sum(arr[x, y]) < threshold * 3 for y in range(ih)):
            right = x + 1
            break
    return im.crop((left, top, right, bottom))


def to_square(im: Image.Image, w_bias: float = 0.5, h_bias: float = 0.35) -> Image.Image:
    im = trim_white(im)
    iw, ih = im.size
    side = min(iw, ih)
    top = max(0, min(int((ih - side) * h_bias), ih - side))
    left = max(0, min(int((iw - side) * w_bias), iw - side))
    cropped = im.crop((left, top, left + side, top + side))
    return cropped.resize((SIZE, SIZE), Image.LANCZOS)


def extract_half_panels(half: Image.Image) -> list[tuple[int, int, int, int]]:
    w, h = half.size
    root = (MARGIN, HEADER, w - MARGIN, h - FOOTER)
    cells = build_grid(half, root)
    if not cells:
        if content_ratio(half, root) >= MIN_RATIO:
            return [root]
        return []

    # 合并过碎网格：若网格 cell 过多，回退到常见模板
    if len(cells) > 6:
        x0, y0, x1, y1 = root
        cx, cy = (x0 + x1) // 2, (y0 + y1) // 2
        templates = [
            [(x0, y0, cx, cy), (cx, y0, x1, cy), (x0, cy, cx, y1), (cx, cy, x1, y1)],
            [(x0, y0, int(x0 + (x1 - x0) * 0.58), y1), (int(x0 + (x1 - x0) * 0.58), y0, x1, cy), (int(x0 + (x1 - x0) * 0.58), cy, x1, y1)],
            [(x0, y0, x1, cy), (x0, cy, x1, y1)],
            [(x0, y0, cx, y1), (cx, y0, x1, y1)],
            [root],
        ]
        for tpl in templates:
            valid = [b for b in tpl if content_ratio(half, b) >= MIN_RATIO]
            if len(valid) >= 2:
                return valid
        return [root]
    return cells


def process_all() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    index: list[str] = []
    count = 0

    page_files = sorted(PAGES_DIR.glob("page-*.jpg"))
    for page_path in page_files:
        page_num = int(re.search(r"page-(\d+)", page_path.name).group(1))
        if page_num in SKIP_PAGES:
            continue

        im = Image.open(page_path).convert("RGB")
        w, h = im.size
        halves = [
            ("a", im.crop((0, 0, w // 2, h))),
            ("b", im.crop((w // 2, 0, w, h))),
        ]

        for half_id, half in halves:
            panels = extract_half_panels(half)
            for idx, box in enumerate(panels, start=1):
                crop = half.crop(box)
                out_name = f"p{page_num:02d}-{half_id}{idx}.jpg"
                out_path = OUT_DIR / out_name
                to_square(crop).save(out_path, "JPEG", quality=93, optimize=True)
                index.append(f"{out_name}\tpage={page_num}\thalf={half_id}\tpanel={idx}")
                count += 1

    (OUT_DIR / "index.txt").write_text("\n".join(index) + "\n", encoding="utf-8")
    return count


def main() -> None:
    if not PAGES_DIR.exists():
        print(f"请先提取 PDF 页面: {PAGES_DIR}", file=sys.stderr)
        sys.exit(1)
    n = process_all()
    print(f"完成：共 {n} 张 → {OUT_DIR}")


if __name__ == "__main__":
    main()
