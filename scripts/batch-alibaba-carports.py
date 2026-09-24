#!/usr/bin/env python3
"""从画册批量生成阿里巴巴国际站 1000×1000 车棚主图。"""

from __future__ import annotations

import os
import sys

from PIL import Image

BROCHURE_DIR = os.path.join(os.path.dirname(__file__), "../public/brochure-images")
OUT_DIR = os.path.join(os.path.dirname(__file__), "../public/alibaba-carports")

# (页码, 上方型号或None, 下方型号, 仅取下方)
CARPORT_PAGES = [
    (11, None, "CP-1001", True),   # 上方是结构图，只要下方实景
    (12, "CP-1002", "CP-1003", False),
    (13, "CP-1004", "CP-1005", False),
    (14, "CP-1006", "CP-1007", False),
    (15, "CP-1008", "CP-1009", False),
    (16, "CP-1010", "CP-1011", False),
]


def find_split_row(img: Image.Image) -> int:
    w, h = img.size
    px = img.load()
    best_y, best_score = h // 2, 0.0
    for y in range(int(h * 0.35), int(h * 0.65)):
        score = sum(1 for x in range(w) if sum(px[x, y]) > 720) / w
        if score > best_score:
            best_score, best_y = score, y
    return best_y


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


def remove_label_strip(im: Image.Image, strip_ratio: float = 0.06) -> Image.Image:
    iw, ih = im.size
    cut = int(ih * strip_ratio)
    return im.crop((0, 0, iw, max(ih - cut, 1)))


def to_alibaba_square(
    im: Image.Image,
    out_path: str,
    h_bias: float = 0.0,
    w_bias: float = 0.28,
    size: int = 1000,
) -> None:
    im = remove_label_strip(trim_white(im))
    iw, ih = im.size
    side = min(iw, ih)
    top = max(0, min(int((ih - side) * h_bias), ih - side))
    left = max(0, min(int((iw - side) * w_bias), iw - side))
    cropped = im.crop((left, top, left + side, top + side))
    result = cropped.resize((size, size), Image.LANCZOS)
    result.save(out_path, "JPEG", quality=93, optimize=True)


def find_page_file(page_num: int) -> str:
    prefix = f"{page_num:02d}-"
    for name in sorted(os.listdir(BROCHURE_DIR)):
        if name.startswith(prefix) and name.endswith(".webp"):
            return os.path.join(BROCHURE_DIR, name)
    raise FileNotFoundError(f"Page {page_num} not found in {BROCHURE_DIR}")


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)
    count = 0

    for page_num, name_top, name_bottom, bottom_only in CARPORT_PAGES:
        src = find_page_file(page_num)
        img = Image.open(src).convert("RGB")
        w, h = img.size
        split_y = find_split_row(img)

        top = img.crop((0, 0, w, split_y))
        bottom = img.crop((0, split_y, w, h))

        if not bottom_only and name_top:
            out = os.path.join(OUT_DIR, f"{name_top}.jpg")
            to_alibaba_square(top, out)
            print(f"✓ {name_top}  (page {page_num} top)")
            count += 1

        if name_bottom:
            out = os.path.join(OUT_DIR, f"{name_bottom}.jpg")
            to_alibaba_square(bottom, out)
            print(f"✓ {name_bottom}  (page {page_num} bottom)")
            count += 1

    print(f"\n完成：共 {count} 张 → {OUT_DIR}")


if __name__ == "__main__":
    main()
