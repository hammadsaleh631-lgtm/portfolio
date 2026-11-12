import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS_DIR = ROOT / "public" / "assets" / "docs"

HTML_FILE = DOCS_DIR / "Saleh_Hammad_Flutter_Developer_Resume.html"
PDF_FILE = DOCS_DIR / "Saleh_Hammad_Flutter_Developer_Resume.pdf"

if not HTML_FILE.exists():
    raise FileNotFoundError(f"Missing HTML source: {HTML_FILE}")

edge_path = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
if not edge_path.exists():
    edge_path = Path(r"C:\Program Files\Microsoft\Edge\Application\msedge.exe")

cmd = [
    str(edge_path),
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={PDF_FILE.resolve()}",
    str(HTML_FILE.resolve())
]

res = subprocess.run(cmd, capture_output=True, text=True)
if PDF_FILE.exists() and PDF_FILE.stat().st_size > 1000:
    # Check page count
    raw = PDF_FILE.read_bytes().decode("latin-1", errors="ignore")
    pages = len(re.findall(r"/Type\s*/Page\b", raw))
    print(f"SUCCESS: PDF created at {PDF_FILE}")
    print(f"File size: {PDF_FILE.stat().st_size} bytes")
    print(f"Total Pages: {pages}")
else:
    print("FAILED to compile PDF:", res.stderr, res.stdout)
