#!/usr/bin/env python3
"""
将画册中的上下双图页面拆成两张 1000×1000 阿里巴巴主图，并突出雨棚主体。

用法:
  python3 scripts/prepare-alibaba-images.py <输入图片> [输出目录] [--name-top CP-1002] [--name-bottom CP-1003]

示例:
  python3 scripts/prepare-alibaba-images.py page12.png public/alibaba-images --name-top CP-1002 --name-bottom CP-1003
"""

from __future__ import annotations

import argparse
import os
import sys

from PIL import Image


def find_split_row(img: Image.Image, threshold: int = 720) -> int:
    w, h = img.size
    px = img.load()
    best_y, best_score = h // 2, 0.0
    for y in range(int(h * 0.35), int(h * 0.65)):
        score = sum(1 for x in range(w) if sum(px[x, y]) > threshold) / w
        if score > best_score:
            best_score, best_y = score, y
    return best_y


def is_content_pixel(r: int, g: int, b: int, threshold: int = 235) -> bool:
    return r + g + b < threshold * 3


def trim_white(im: Image.Image, threshold: int = 235) -> Image.Image:
    arr = im.load()
    iw, ih = im.size
    top, bottom, left, right = 0, ih, 0, iw
    for y in range(ih):
        if any(is_content_pixel(*arr[x, y], threshold) for x in range(iw)):
            top = y
            break
    for y in range(ih - 1, -1, -1):
        if any(is_content_pixel(*arr[x, y], threshold) for x in range(iw)):
            bottom = y + 1
            break
    for x in range(iw):
        if any(is_content_pixel(*arr[x, y], threshold) for y in range(ih)):
            left = x
            break
    for x in range(iw - 1, -1, -1):
        if any(is_content_pixel(*arr[x, y], threshold) for y in range(ih)):
            right = x + 1
            break
    return im.crop((left, top, right, bottom))


def remove_label_strip(im: Image.Image, strip_ratio: float = 0.06) -> Image.Image:
    iw, ih = im.size
    cut = int(ih * strip_ratio)
    return im.crop((0, 0, iw, ih - cut))


def to_alibaba_square(
    im: Image.Image,
    out_path: str,
    h_bias: float = 0.0,
    w_bias: float = 0.3,
    size: int = 1000,
) -> None:
    """裁成 1:1 并缩放到 size×size。h_bias=0 偏上（突出雨棚），w_bias 控制水平取景。"""
    im = remove_label_strip(trim_white(im))
    iw, ih = im.size
    side = min(iw, ih)
    top = max(0, min(int((ih - side) * h_bias), ih - side))
    left = max(0, min(int((iw - side) * w_bias), iw - side))
    cropped = im.crop((left, top, left + side, top + side))
    result = cropped.resize((size, size), Image.LANCZOS)
    result.save(out_path, "JPEG", quality=92, optimize=True)


def process_page(
    src: str,
    out_dir: str,
    name_top: str = "product-top",
    name_bottom: str = "product-bottom",
) -> None:
    img = Image.open(src).convert("RGB")
    w, h = img.size
    split_y = find_split_row(img)

    top = img.crop((0, 0, w, split_y))
    bottom = img.crop((0, split_y, w, h))

    os.makedirs(out_dir, exist_ok=True)
    top_path = os.path.join(out_dir, f"{name_top}.jpg")
    bottom_path = os.path.join(out_dir, f"{name_bottom}.jpg")

    to_alibaba_square(top, top_path, h_bias=0.0, w_bias=0.25)
    to_alibaba_square(bottom, bottom_path, h_bias=0.0, w_bias=0.30)

    print(f"输入: {src} ({w}×{h})，分割行 y={split_y}")
    print(f"  → {top_path}")
    print(f"  → {bottom_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="拆分上下双图并生成 1000×1000 阿里巴巴主图")
    parser.add_argument("input", help="输入图片路径")
    parser.add_argument("output", nargs="?", default="public/alibaba-images", help="输出目录")
    parser.add_argument("--name-top", default="product-top", help="上方产品文件名")
    parser.add_argument("--name-bottom", default="product-bottom", help="下方产品文件名")
    args = parser.parse_args()

    if not os.path.isfile(args.input):
        print(f"文件不存在: {args.input}", file=sys.stderr)
        sys.exit(1)

    process_page(args.input, args.output, args.name_top, args.name_bottom)


if __name__ == "__main__":
    main()
