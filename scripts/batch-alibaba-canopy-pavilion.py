#!/usr/bin/env python3
"""从画册批量生成阿里巴巴 1000×1000 主图（雨棚 YP / 凉亭 LT）。"""

from __future__ import annotations

import os
from dataclasses import dataclass
from typing import Callable

from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "..")
BROCHURE_DIR = os.path.join(ROOT, "public/brochure-images")
OUT_CANOPY = os.path.join(ROOT, "public/alibaba-canopies")
OUT_PAVILION = os.path.join(ROOT, "public/alibaba-pavilions")


@dataclass
class CropSpec:
    name: str
    box: tuple[float, float, float, float]  # left, top, right, bottom as 0-1 fractions
    w_bias: float = 0.28
    h_bias: float = 0.0


def find_page_file(page_num: int) -> str:
    prefix = f"{page_num:02d}-"
    for name in sorted(os.listdir(BROCHURE_DIR)):
        if name.startswith(prefix) and name.endswith(".webp"):
            return os.path.join(BROCHURE_DIR, name)
    raise FileNotFoundError(f"Page {page_num} not found")


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


def crop_fraction(img: Image.Image, box: tuple[float, float, float, float]) -> Image.Image:
    w, h = img.size
    l, t, r, b = box
    return img.crop((int(w * l), int(h * t), int(w * r), int(h * b)))


def process_dual(page: int, top: str | None, bottom: str, bottom_only: bool, out_dir: str) -> int:
    img = Image.open(find_page_file(page)).convert("RGB")
    w, h = img.size
    split_y = find_split_row(img)
    count = 0
    if not bottom_only and top:
        to_alibaba_square(img.crop((0, 0, w, split_y)), os.path.join(out_dir, f"{top}.jpg"))
        print(f"  ✓ {top}")
        count += 1
    to_alibaba_square(img.crop((0, split_y, w, h)), os.path.join(out_dir, f"{bottom}.jpg"))
    print(f"  ✓ {bottom}")
    return count + 1


def process_crops(page: int, specs: list[CropSpec], out_dir: str) -> int:
    img = Image.open(find_page_file(page)).convert("RGB")
    for spec in specs:
        region = crop_fraction(img, spec.box)
        to_alibaba_square(region, os.path.join(out_dir, f"{spec.name}.jpg"), spec.h_bias, spec.w_bias)
        print(f"  ✓ {spec.name}")
    return len(specs)


def main() -> None:
    os.makedirs(OUT_CANOPY, exist_ok=True)
    os.makedirs(OUT_PAVILION, exist_ok=True)
    total = 0

    print("雨棚系列 (YP)")
    canopy_pages = [
        (3, None, "YP-1001", True),
        (4, "YP-1002", "YP-1003", False),
        (5, "YP-1004", "YP-1005", False),
        (6, "YP-1006", "YP-1007", False),
        (7, "YP-1008", "YP-1009", False),
        (8, "YP-1010", "YP-1011", False),
    ]
    for page, top, bottom, bottom_only in canopy_pages:
        total += process_dual(page, top, bottom, bottom_only, OUT_CANOPY)

    print("\n凉亭系列 (LT)")
    # 封面页：只取中间主图
    total += process_crops(
        18,
        [CropSpec("LT-1001", (0.02, 0.22, 0.98, 0.72), w_bias=0.2, h_bias=0.05)],
        OUT_PAVILION,
    )
    # 三图页：上左右 + 下大图
    total += process_crops(
        19,
        [
            CropSpec("LT-1002", (0.02, 0.04, 0.50, 0.46), w_bias=0.15),
            CropSpec("LT-1003", (0.50, 0.04, 0.98, 0.46), w_bias=0.15),
            CropSpec("LT-1004", (0.02, 0.48, 0.98, 0.96), w_bias=0.2, h_bias=0.05),
        ],
        OUT_PAVILION,
    )
    total += process_dual(20, "LT-1005", "LT-1006", False, OUT_PAVILION)
    total += process_dual(21, "LT-1007", "LT-1008", False, OUT_PAVILION)
    # 五图页
    total += process_crops(
        22,
        [
            CropSpec("LT-1009", (0.02, 0.03, 0.98, 0.42), w_bias=0.2, h_bias=0.0),
            CropSpec("LT-1010", (0.02, 0.44, 0.50, 0.70), w_bias=0.15),
            CropSpec("LT-1011", (0.50, 0.44, 0.98, 0.70), w_bias=0.15),
            CropSpec("LT-1012", (0.02, 0.72, 0.50, 0.97), w_bias=0.15),
            CropSpec("LT-1013", (0.50, 0.72, 0.98, 0.97), w_bias=0.15),
        ],
        OUT_PAVILION,
    )
    # 中式凉亭：只取底部两张产品图
    total += process_crops(
        24,
        [
            CropSpec("LT-1014", (0.02, 0.58, 0.50, 0.96), w_bias=0.15, h_bias=0.05),
            CropSpec("LT-1015", (0.50, 0.58, 0.98, 0.96), w_bias=0.15, h_bias=0.05),
        ],
        OUT_PAVILION,
    )

    print(f"\n完成：雨棚 {len(os.listdir(OUT_CANOPY))} 张 → {OUT_CANOPY}")
    print(f"      凉亭 {len(os.listdir(OUT_PAVILION))} 张 → {OUT_PAVILION}")
    print(f"      合计 {total} 张")


if __name__ == "__main__":
    main()
