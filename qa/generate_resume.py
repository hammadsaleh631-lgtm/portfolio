import os
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS_DIR = ROOT / "public" / "assets" / "docs"
DOCS_DIR.mkdir(parents=True, exist_ok=True)

HTML_FILE = DOCS_DIR / "Saleh_Hammad_Flutter_Developer_Resume.html"
PDF_FILE = DOCS_DIR / "Saleh_Hammad_Flutter_Developer_Resume.pdf"

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Saleh Hammad — Flutter Developer Resume</title>
<style>
  @page {
    size: A4;
    margin: 10mm 14mm;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    font-size: 9pt;
    line-height: 1.4;
  }
  .header {
    border-bottom: 2px solid #0284c7;
    padding-bottom: 6px;
    margin-bottom: 10px;
  }
  .name {
    font-size: 21pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }
  .headline {
    font-size: 10.5pt;
    font-weight: 600;
    color: #0284c7;
    margin-top: 2px;
    margin-bottom: 4px;
  }
  .contact-bar {
    font-size: 8.5pt;
    color: #475569;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .contact-bar a {
    color: #0284c7;
    text-decoration: none;
    font-weight: 600;
  }
  
  .section {
    margin-bottom: 9px;
  }
  .section-title {
    font-size: 9.5pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }
  
  .summary {
    font-size: 8.7pt;
    color: #334155;
    text-align: justify;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 140px 1fr;
    row-gap: 3px;
    font-size: 8.5pt;
  }
  .skill-category {
    font-weight: 700;
    color: #0f172a;
  }
  .skill-items {
    color: #334155;
  }
  
  .project-item {
    margin-bottom: 7px;
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }
  .project-title {
    font-size: 9.3pt;
    font-weight: 700;
    color: #0f172a;
  }
  .project-role {
    font-size: 8.3pt;
    color: #0284c7;
    font-weight: 600;
  }
  .project-meta {
    font-size: 7.8pt;
    color: #64748b;
  }
  .project-desc {
    font-size: 8.5pt;
    color: #334155;
    margin-bottom: 2px;
  }
  .project-bullets {
    list-style-type: square;
    margin-left: 15px;
    font-size: 8.3pt;
    color: #334155;
  }
  .project-bullets li {
    margin-bottom: 1.5px;
  }
  .project-tech {
    font-size: 7.8pt;
    color: #475569;
    font-style: italic;
    margin-top: 2px;
  }

  .education-block {
    display: flex;
    justify-content: space-between;
    font-size: 8.7pt;
  }
  .edu-degree {
    font-weight: 700;
    color: #0f172a;
  }
  .edu-school {
    color: #475569;
    font-size: 8.3pt;
  }
  .edu-note {
    font-size: 8pt;
    color: #64748b;
    margin-top: 2px;
  }
</style>
</head>
<body>

  <div class="header">
    <div class="name">Saleh Hammad</div>
    <div class="headline">Flutter Developer &bull; Mobile & Desktop Software Engineer</div>
    <div class="contact-bar">
      <span>Djelfa, Algeria (UTC+1) &bull; Open to Remote & Full-Time</span>
      <span>Email: <a href="mailto:hammadsaleh631@gmail.com">hammadsaleh631@gmail.com</a></span>
      <span>GitHub: <a href="https://github.com/hammadsaleh631-lgtm">github.com/hammadsaleh631-lgtm</a></span>
      <span>Portfolio: <a href="https://hammadsaleh631-lgtm.github.io">hammadsaleh631-lgtm.github.io</a></span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary">
      Engineering-driven Flutter Developer specializing in building robust, production-grade cross-platform applications for Mobile and Desktop environments. Expertise in Clean Architecture, deterministic state machines (BLoC/Cubit), offline-first local persistence (Drift / SQLite FFI), and enterprise monorepo architectures. Skilled in integrating resilient backends (Supabase PostgreSQL, TypeScript Edge Functions, Row Level Security, and Firebase). Dedicated to zero-defect code quality, memory safety, defensive async handling, and systematic automated verification.
    </p>
  </div>

  <div class="section">
    <div class="section-title">Technical Competencies</div>
    <div class="skills-grid">
      <div class="skill-category">Frameworks & UI:</div>
      <div class="skill-items">Flutter (Android, iOS, Windows, Linux), Dart 3, Fluent UI, Responsive Layouts, Custom Painters.</div>
      
      <div class="skill-category">Architecture & State:</div>
      <div class="skill-items">Clean Architecture (Presentation, Domain, Data), BLoC / Cubit, Repository Pattern, Dependency Injection.</div>
      
      <div class="skill-category">Persistence & Data:</div>
      <div class="skill-items">SQLite FFI (sqflite_common_ffi), Drift / SQLite V11, Local Vault Backups, Non-destructive migrations.</div>
      
      <div class="skill-category">Cloud & APIs:</div>
      <div class="skill-items">Supabase (Auth, PostgreSQL, Row Level Security RLS), Serverless Edge Functions (TypeScript), Firebase Suite.</div>
      
      <div class="skill-category">Hardware & Desktop:</div>
      <div class="skill-items">MediaKit (libmpv Hardware Video Acceleration), QR Code scanning, Thermal Receipt generation, Window Manager.</div>
      
      <div class="skill-category">Tooling & Rigor:</div>
      <div class="skill-items">Git Monorepos, Static Analysis, Memory Leak Elimination, Defensive Async Streams, Automated QA scripts.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Featured Software Engineering Projects</div>

    <!-- Project 1: Elmam -->
    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">Elmam Educational Management System</span>
          <span class="project-role"> — Full-Stack Flutter Monorepo</span>
        </div>
        <div class="project-meta">Production-Grade Monorepo &bull; Live Landing Page Online</div>
      </div>
      <p class="project-desc">
        Integrated educational management ecosystem uniting dedicated Teacher and Student Flutter apps around a shared domain package (<code>eduapp_shared</code>) and a Supabase backend.
      </p>
      <ul class="project-bullets">
        <li>Architected an enterprise monorepo eliminating code duplication with 100% type-safe parity between Teacher and Student applications.</li>
        <li>Implemented offline-first SQLite database (Drift V11) with non-destructive cloud synchronization during spotty internet access.</li>
        <li>Engineered instant QR-code live session check-ins, automated student enrollment rosters, course timetables, and lecture uploads.</li>
        <li>Developed 7 serverless TypeScript Edge Functions on Supabase with strict Row Level Security (RLS) and BaridiMob payment tracking.</li>
      </ul>
      <div class="project-tech">Technologies: Flutter, Dart, Supabase, PostgreSQL, Drift/SQLite, TypeScript Edge Functions, BLoC, QR Attendance, BaridiMob.</div>
    </div>

    <!-- Project 2: School ERP -->
    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">School ERP — Academic Administration Workstation</span>
          <span class="project-role"> — Flutter Desktop System</span>
        </div>
        <div class="project-meta">Desktop (Windows & Linux)</div>
      </div>
      <p class="project-desc">
        Comprehensive academic management workstation engineered for educational institutions, handling student dossiers, grade tracking, tuition payments, and staff schedules.
      </p>
      <ul class="project-bullets">
        <li>Built resilient multi-view desktop dashboard with keyboard shortcuts and high-density data entry for administrative staff.</li>
        <li>Implemented normalized local database schemas with instant search, reporting filters, and automated audit trails.</li>
      </ul>
      <div class="project-tech">Technologies: Flutter Desktop, Dart, Clean Architecture, BLoC / Cubit, Local Database Persistence, Reporting.</div>
    </div>

    <!-- Project 3: VetERP -->
    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">VetERP — Clinic Management Workstation</span>
          <span class="project-role"> — Flutter Desktop ERP</span>
        </div>
        <div class="project-meta">Desktop (Windows & Linux)</div>
      </div>
      <p class="project-desc">
        Offline practice management workstation for veterinary clinics, managing animal clinical histories, treatments, and balance debts.
      </p>
      <ul class="project-bullets">
        <li>Engineered local-first data engine using native C-speed SQLite FFI (<code>sqflite_common_ffi</code>) across 7 normalized relational tables with zero cloud bills.</li>
        <li>Designed a persistent multi-view master shell with GoRouter ShellRoute, keeping active diagnostic drafts open during navigation.</li>
      </ul>
      <div class="project-tech">Technologies: Flutter Desktop, Dart, SQLite FFI, GoRouter, BLoC / Cubit, Card Scanner, Vault Backups.</div>
    </div>

    <!-- Project 4: POS Flutter App -->
    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">POS Flutter App — Retail & Point of Sale</span>
          <span class="project-role"> — Mobile & Tablet</span>
        </div>
        <div class="project-meta">Mobile & Tablet (Android / iOS)</div>
      </div>
      <p class="project-desc">
        Touchscreen retail point-of-sale terminal built for sub-second barcode checkout, dynamic cart tax computations, and offline sales caching.
      </p>
      <ul class="project-bullets">
        <li>Engineered immutable CartState BLoC machine guaranteeing atomic calculations and eliminating race conditions during rapid item scans.</li>
        <li>Integrated barcode scanning, digital receipt generation, and offline transaction buffering for network resilience.</li>
      </ul>
      <div class="project-tech">Technologies: Flutter, Dart, BLoC State Management, Barcode Scanner, Receipt Generation, Clean Architecture.</div>
    </div>

    <!-- Project 5: BacOnHands -->
    <div class="project-item">
      <div class="project-header">
        <div>
          <span class="project-title">BacOnHands — Educational Desktop Workstation</span>
          <span class="project-role"> — Windows Desktop</span>
        </div>
        <div class="project-meta">Windows 10 / 11 Native Desktop</div>
      </div>
      <p class="project-desc">
        Offline educational browser for exam candidates with Microsoft Fluent UI, hardware-accelerated video playback, and LaTeX mathematical typesetting.
      </p>
      <ul class="project-bullets">
        <li>Integrated MediaKit (<code>libmpv</code>) for GPU hardware-accelerated offline lecture playback with zero CPU bottlenecks.</li>
        <li>Implemented high-precision LaTeX formula rendering and 3D interactive flashcards for scientific study.</li>
      </ul>
      <div class="project-tech">Technologies: Flutter Desktop, Dart, Fluent UI, MediaKit, LaTeX Math Typesetting, Window Manager.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Education & Applied Engineering Disciplines</div>
    <div class="education-block">
      <div>
        <div class="edu-degree">Bachelor's Equivalent (Licence) in Food Sciences — Technology & Quality Control</div>
        <div class="edu-school">University of Djelfa, Algeria</div>
        <div class="edu-note">Applied systematic laboratory quality control, defect isolation methodologies, and rigorous error auditing directly to software testing and defensive programming.</div>
      </div>
      <div style="font-size: 8pt; color: #64748b; text-align: right;">
        <div>Graduated &bull; Systematic QA & Testing</div>
        <div>Zero-Defect Engineering Mindset</div>
      </div>
    </div>
  </div>

</body>
</html>
"""

HTML_FILE.write_text(html_content, encoding="utf-8")
print(f"HTML written to {HTML_FILE}")

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
    print(f"SUCCESS: PDF created at {PDF_FILE} (Size: {PDF_FILE.stat().st_size} bytes)")
else:
    print("FAILED:", res.stderr, res.stdout)
