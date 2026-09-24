#!/usr/bin/env node
/**
 * 从云展365电子画册下载所有页面图片
 * 用法: node scripts/download-brochure-images.mjs [输出目录]
 */

import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const BOOK_URL =
  "https://bookh.yunzhan365.com/zctc/ydwg/mobile/javascript/config.js";
const BASE = "https://bookh.yunzhan365.com/zctc/ydwg";
const OUT =
  process.argv[2] ||
  path.join(process.cwd(), "public/brochure-images");

function fetchConfig() {
  const raw = execSync(`curl -sL "${BOOK_URL}"`, { encoding: "utf8" });
  const start = raw.indexOf('"fliphtml5_pages":');
  const arrStart = raw.indexOf("[", start);
  let depth = 0;
  let arrEnd = arrStart;
  for (let i = arrStart; i < raw.length; i++) {
    if (raw[i] === "[") depth++;
    if (raw[i] === "]") {
      depth--;
      if (depth === 0) {
        arrEnd = i;
        break;
      }
    }
  }
  return JSON.parse(raw.slice(arrStart, arrEnd + 1));
}

fs.mkdirSync(OUT, { recursive: true });
const pages = fetchConfig();
console.log(`共 ${pages.length} 页，保存到: ${OUT}\n`);

let ok = 0;
for (let i = 0; i < pages.length; i++) {
  const file = pages[i].n[0].replace("../files/large/", "");
  const url = `${BASE}/files/large/${file}?hyztg=1`;
  const out = path.join(OUT, `${String(i + 1).padStart(2, "0")}-${file}`);
  execSync(`curl -sL "${url}" -o "${out}"`);
  const size = fs.statSync(out).size;
  console.log(`  ${i + 1}/${pages.length}  ${(size / 1024).toFixed(0)} KB  ${path.basename(out)}`);
  ok++;
}

console.log(`\n完成，共下载 ${ok} 张图片`);
