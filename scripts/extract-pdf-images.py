#!/usr/bin/env python3
"""从 PDF 提取全部页面为高清 JPG。"""

from __future__ import annotations

import argparse
import os
import sys

import fitz


def extract_pdf(pdf_path: str, out_dir: str, zoom: float = 2.0, also_embedded: bool = True) -> None:
    if not os.path.isfile(pdf_path):
        print(f"文件不存在: {pdf_path}", file=sys.stderr)
        sys.exit(1)

    pages_dir = os.path.join(out_dir, "pages")
    embed_dir = os.path.join(out_dir, "embedded")
    os.makedirs(pages_dir, exist_ok=True)
    if also_embedded:
        os.makedirs(embed_dir, exist_ok=True)

    doc = fitz.open(pdf_path)
    mat = fitz.Matrix(zoom, zoom)

    for i, page in enumerate(doc):
        pix = page.get_pixmap(matrix=mat, alpha=False)
        pix.save(os.path.join(pages_dir, f"page-{i + 1:02d}.jpg"))

        if also_embedded:
            for j, img in enumerate(page.get_images(full=True)):
                base = doc.extract_image(img[0])
                path = os.path.join(embed_dir, f"page-{i + 1:02d}-img{j + 1}.{base['ext']}")
                with open(path, "wb") as f:
                    f.write(base["image"])

    print(f"共 {doc.page_count} 页 → {pages_dir}")
    if also_embedded:
        print(f"内嵌原图 → {embed_dir}")


def main() -> None:
    parser = argparse.ArgumentParser(description="从 PDF 提取页面图片")
    parser.add_argument("pdf", help="PDF 文件路径")
    parser.add_argument(
        "-o",
        "--output",
        default="public/hujiang-pdf",
        help="输出目录（默认 public/hujiang-pdf）",
    )
    parser.add_argument("--zoom", type=float, default=2.0, help="渲染倍率，默认 2.0")
    args = parser.parse_args()
    extract_pdf(args.pdf, args.output, args.zoom)


if __name__ == "__main__":
    main()
