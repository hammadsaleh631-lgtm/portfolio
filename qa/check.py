#!/usr/bin/env python3
"""
Automated Static QA & Verification Script
Checks that all assets, stylesheets, scripts, and integrity constraints pass.
Zero external pip dependencies required.
"""

import sys
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

FAILURES = []
WARNINGS = []
CHECKS_PASSED = 0

def check_file_exists(rel_path: str, context: str):
    global CHECKS_PASSED
    # Strip query parameters or hashes if present
    cleaned = rel_path.split("?")[0].split("#")[0]
    target = ROOT / cleaned.lstrip("./").lstrip("/")
    if not target.exists():
        FAILURES.append(f"Missing referenced asset: '{rel_path}' in {context}")
    else:
        CHECKS_PASSED += 1

def check_html_file(file_path: Path):
    global CHECKS_PASSED
    content = file_path.read_text(encoding="utf-8")
    
    # Check link hrefs
    for match in re.finditer(r'<link[^>]+href=["\']([^"\']+)["\']', content):
        href = match.group(1)
        if not href.startswith("http") and not href.startswith("mailto:") and not href.startswith("#"):
            check_file_exists(href, file_path.name)
            
    # Check script srcs
    for match in re.finditer(r'<script[^>]+src=["\']([^"\']+)["\']', content):
        src = match.group(1)
        if not src.startswith("http"):
            check_file_exists(src, file_path.name)
            
    # Check img srcs and alts
    for match in re.finditer(r'<img\s+([^>]+)>', content):
        img_tag = match.group(1)
        src_match = re.search(r'src=["\']([^"\']+)["\']', img_tag)
        alt_match = re.search(r'alt=["\']([^"\']*)["\']', img_tag)
        
        if not alt_match:
            FAILURES.append(f"Image tag missing alt attribute in {file_path.name}: <img {img_tag}>")
        else:
            CHECKS_PASSED += 1
            
        if src_match:
            src = src_match.group(1)
            if not src.startswith("http"):
                check_file_exists(src, file_path.name)

    # Check banned hype claims
    banned_patterns = [
        r"\b100% guarantee\b",
        r"\bworld's best\b",
        r"\bflutter guru\b",
        r"\b10\+ years of flutter\b",
    ]
    for pattern in banned_patterns:
        if re.search(pattern, content, re.IGNORECASE):
            FAILURES.append(f"Banned hype phrase found matching '{pattern}' in {file_path.name}")
        else:
            CHECKS_PASSED += 1

def check_js_imports():
    global CHECKS_PASSED
    scripts_dir = ROOT / "src" / "scripts"
    data_dir = ROOT / "src" / "data"
    
    all_js_files = list(scripts_dir.glob("*.js")) + list(data_dir.glob("*.js"))
    for js_file in all_js_files:
        content = js_file.read_text(encoding="utf-8")
        for match in re.finditer(r'import\s+.*?from\s+["\']([^"\']+)["\']', content):
            import_path = match.group(1)
            target = (js_file.parent / import_path).resolve()
            if not target.exists():
                FAILURES.append(f"Broken JS import '{import_path}' in {js_file.name}")
            else:
                CHECKS_PASSED += 1

def main():
    global CHECKS_PASSED
    print("=" * 60)
    print("RUNNING AUTOMATED STATIC QA AUDIT FOR PORTFOLIO")
    print("=" * 60)
    
    html_files = [ROOT / "index.html", ROOT / "404.html"]
    for html in html_files:
        if html.exists():
            check_html_file(html)
        else:
            FAILURES.append(f"Required HTML file missing: {html.name}")
            
    check_js_imports()
    
    # Check essential GitHub Pages artifacts
    for required in [".nojekyll", "README.md"]:
        if not (ROOT / required).exists():
            FAILURES.append(f"Missing required deployment file: {required}")
        else:
            CHECKS_PASSED += 1

    print(f"Total assertions passed: {CHECKS_PASSED}")
    
    if WARNINGS:
        print("\nWARNINGS:")
        for w in WARNINGS:
            print(f"  [WARN] {w}")
            
    if FAILURES:
        print("\nAUDIT FAILED:")
        for f in FAILURES:
            print(f"  [FAIL] {f}")
        sys.exit(1)
    else:
        print("\nALL QA AUDIT CHECKS PASSED SUCCESSFULLY (0 errors).")
        sys.exit(0)

if __name__ == "__main__":
    main()
