/**
 * Project Data — Verified against local source code, live deployments, and real screenshots.
 * Evidence: E:\Edu_app\edu_app_project, C:\Users\hamma\Documents\VetERP, pos_flutter_app, and Bac_on_ur_hands.
 */

export const projects = [
  {
    id: "elmam",
    title: "Elmam Educational System (إلمام التربوي)",
    subtitle: "Enterprise Monorepo — Teacher App, Student App & Supabase Cloud",
    category: "mobile",
    categoryLabel: "Mobile & Cloud Monorepo",
    platform: "Mobile (Android & iOS) + Web",
    status: "Active Development",
    statusType: "active",
    badge: "Active Monorepo (Production Landing Live)",
    logo: "./public/assets/images/elmam_project_logo.png",
    image: null,
    screenshots: [
      {
        src: "./public/assets/images/elmam/elmam_teacher_1.jpg",
        caption: "Teacher App — Student Rosters & QR Check-in"
      },
      {
        src: "./public/assets/images/elmam/elmam_teacher_2.jpg",
        caption: "Teacher App — Active Session & Cohort Schedule"
      },
      {
        src: "./public/assets/images/elmam/elmam_student_1.jpg",
        caption: "Student App — Enrolled Courses & Attendance"
      },
      {
        src: "./public/assets/images/elmam/elmam_student_2.jpg",
        caption: "Student App — Live Lectures & Notifications"
      }
    ],
    liveUrl: "https://hammadsaleh631-lgtm.github.io/elmam-landing/",
    liveLabel: "View Live Landing Page ↗",
    repository: {
      isPrivate: true,
      label: "Private Client Monorepo"
    },
    summary: "Integrated educational management ecosystem connecting instructors, students, live sessions, QR attendance, and automated payment tracking across Algeria.",
    overview: "Structured as an enterprise monorepo (`apps/teacher_app`, `apps/student_app`, `packages/eduapp_shared`, and `supabase/`). Teacher App manages student rosters, QR session check-ins, and session schedules; Student App tracks enrollment and live lectures. The shared package manages local Drift/SQLite persistence (AppDatabase V11) and connects to a Supabase backend guarded by Row Level Security (RLS) and 7 serverless Edge Functions.",
    techStack: [
      "Flutter",
      "Dart",
      "Supabase",
      "Drift / SQLite",
      "Edge Functions (TypeScript)",
      "Clean Architecture",
      "QR Attendance",
      "Row Level Security (RLS)"
    ],
    features: [
      "Teacher & Student dedicated Flutter applications sharing a unified domain package (`eduapp_shared`)",
      "QR-code instant attendance scanning for live classroom sessions",
      "Offline-first local database (AppDatabase V11) with non-destructive cloud sync",
      "7 Supabase Edge Functions handling device claims, group enrollment, and student snapshots",
      "BaridiMob payment integration for educational fee tracking"
    ],
    architectureDetails: {
      dataFlow: "Teacher / Student UI ➔ Domain UseCases ➔ eduapp_shared Drift Local DB ➔ Supabase Edge Functions & RLS",
      keyDecision: "Extracted domain logic and local database tables into a shared Dart package (`eduapp_shared`), ensuring 100% type safety and eliminating duplication between teacher and student apps."
    }
  },
  {
    id: "pos-app",
    title: "POS Flutter App — Retail & Point of Sale",
    subtitle: "Mobile & Tablet POS with Product Catalog, Cart State & Receipts",
    category: "mobile",
    categoryLabel: "Mobile Point of Sale (Flutter)",
    platform: "Mobile & Tablet (Android / iOS)",
    status: "Active Development",
    statusType: "active",
    badge: "Mobile Application",
    logo: null,
    image: null,
    screenshots: [
      {
        src: "./public/assets/images/pos/pos_screen_1.jpg",
        caption: "POS Catalog — Grid View & Category Filters"
      },
      {
        src: "./public/assets/images/pos/pos_screen_2.jpg",
        caption: "Active Cart — Real-time Tax & Total Calculation"
      },
      {
        src: "./public/assets/images/pos/pos_screen_3.jpg",
        caption: "Checkout Flow — Multi-payment & Change Due"
      },
      {
        src: "./public/assets/images/pos/pos_screen_4.jpg",
        caption: "Order History & Digital Receipt Record"
      }
    ],
    liveUrl: null,
    liveLabel: null,
    repository: {
      isPrivate: true,
      label: "Private Repository"
    },
    summary: "High-performance mobile and tablet Point of Sale application engineered for high-frequency retail transactions, offline inventory management, and fast receipt generation.",
    overview: "Built to deliver a smooth touchscreen retail experience with sub-second item scanning, dynamic discount application, and resilient local order caching. Uses BLoC state management to guarantee atomic cart updates and error-free tax calculations even under rapid tap sequences.",
    techStack: [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "Offline Persistence",
      "Barcode Scanning",
      "Receipt Generation",
      "Clean Architecture"
    ],
    features: [
      "Touch-optimized retail catalog with instant product search and category filtering",
      "Atomic cart calculation engine handling variable taxes, discounts, and item quantities",
      "Multi-payment processing flow with instant cash change calculations",
      "Offline transaction caching enabling store operation during internet outages",
      "Structured order history and digital receipt archive"
    ],
    architectureDetails: {
      dataFlow: "Catalog UI ➔ Cart Bloc (Atomic State Emitter) ➔ Local Sales Cache ➔ Thermal / Digital Receipt",
      keyDecision: "Designed an immutable CartState model to eliminate race conditions during rapid barcode scan events."
    }
  },
  {
    id: "veterp",
    title: "VetERP — Clinic Management Workstation",
    subtitle: "Desktop ERP with Local SQLite FFI Engine & Multi-Table Schema",
    category: "desktop",
    categoryLabel: "Desktop Workstation (Windows & Linux)",
    platform: "Desktop (Windows & Linux)",
    status: "Active Development",
    statusType: "active",
    badge: "Desktop Application (v1.0.0)",
    logo: null,
    image: "./public/assets/images/Screenshot 2026-08-10 105802.png",
    screenshots: [],
    liveUrl: null,
    liveLabel: null,
    repository: {
      isPrivate: true,
      label: "Private Repository"
    },
    summary: "Specialized desktop practice management system for veterinary clinics, managing animal patient histories, clinical treatments, balance debts, and automated local backups.",
    overview: "A desktop ERP built for offline clinic operations where internet connectivity cannot be taken for granted. Relies on an SQLite FFI database (`sqflite_common_ffi`) delivering native C-speed queries across 7 relational tables: animals, clinical treatments, customer profiles, daily logs, balance debts, viewer, and database backup snapshots.",
    techStack: [
      "Flutter Desktop",
      "Dart",
      "SQLite (sqflite_common_ffi)",
      "BLoC / Cubit",
      "GoRouter (ShellRoute)",
      "Clean Architecture",
      "Card Scanner Module"
    ],
    features: [
      "Native desktop UX optimized for Windows & Linux with high-density keyboard data entry",
      "Persistent master-detail layout via GoRouter ShellRoute keeping diagnostic forms active across view switches",
      "Comprehensive patient dossier tracking treatments, vaccinations, and balance debts",
      "Integrated Card Scanner module for client identification and record indexing",
      "One-click database vault snapshot generator for reliable disaster recovery"
    ],
    architectureDetails: {
      dataFlow: "Desktop Shell (GoRouter) ➔ Clinical Form Cubit ➔ SQLite FFI Connection Pool ➔ Disk Backup Vault",
      keyDecision: "Chose native SQLite FFI over cloud storage so clinics retain 100% data ownership, zero recurring cloud bills, and zero downtime."
    }
  },
  {
    id: "baconhands",
    title: "BacOnHands (Bac On Your Hands)",
    subtitle: "Offline Educational Desktop Browser with MediaKit Hardware Video",
    category: "desktop",
    categoryLabel: "Desktop Workstation (Windows)",
    platform: "Desktop (Windows 11 / 10)",
    status: "Active Prototype",
    statusType: "prototype",
    badge: "Desktop Application (v0.1.0)",
    logo: null,
    image: null,
    screenshots: [],
    liveUrl: null,
    liveLabel: null,
    repository: {
      isPrivate: true,
      label: "Private Repository"
    },
    summary: "Offline educational browser designed for Algerian Baccalaureate candidates, featuring native Fluent UI styling, hardware video playback, and LaTeX formula rendering.",
    overview: "Engineered specifically for students preparing for national exams without dependable internet access. Built with Microsoft Fluent UI design guidelines, low-latency video playback using MediaKit (`libmpv`), and mathematical typesetting via `flutter_math_fork`.",
    techStack: [
      "Flutter Desktop",
      "Dart",
      "Fluent UI",
      "MediaKit (Hardware Video)",
      "Window Manager",
      "Flutter Math Fork (LaTeX)",
      "Flip Card Plus"
    ],
    features: [
      "Native Windows 11 Fluent UI desktop experience with light/dark theme adaptation",
      "Hardware-accelerated local video lecture player powered by libmpv with zero CPU spikes",
      "Precise LaTeX mathematical formula typesetting for complex physics and calculus equations",
      "Interactive active recall flashcard modules with 3D flip card animations",
      "Custom desktop window chrome with minimum dimension and aspect-ratio constraints"
    ],
    architectureDetails: {
      dataFlow: "Fluent Window Shell ➔ Subject Revision Module ➔ Hardware Video Stream ➔ State Persistence (SharedPreferences)",
      keyDecision: "Integrated MediaKit with native Windows video libraries to support high-bitrate offline revision lectures smoothly on low-spec student laptops."
    }
  },
  {
    id: "firebase-apps",
    title: "Commercial Mobile Applications",
    subtitle: "Cross-Platform Mobile Apps Backed by Google Firebase",
    category: "mobile",
    categoryLabel: "Mobile Applications (Android / iOS)",
    status: "Completed Works",
    statusType: "completed",
    badge: "3 Completed Projects",
    logo: null,
    image: null,
    screenshots: [],
    liveUrl: null,
    liveLabel: null,
    repository: {
      isPrivate: true,
      label: "Client Work"
    },
    summary: "Production-tested mobile applications backed by Firebase infrastructure for authentication, cloud storage, real-time sync, and notifications.",
    overview: "Delivered 3 complete cross-platform Flutter applications utilizing Firebase Cloud services. Focused on responsive UI implementation, clean state management, robust error handling around network drops, and responsive data caching.",
    techStack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Firebase Storage",
      "Cloud Messaging"
    ],
    features: [
      "Multi-provider authentication flows with session state preservation and token refresh",
      "Real-time Firestore stream subscriptions with granular offline caching policies",
      "Asynchronous image compression and resumable cloud upload workflows",
      "Lifecycle-safe stream listeners with explicit disposal to eliminate memory leaks"
    ],
    architectureDetails: {
      dataFlow: "BLoC Event ➔ Firestore Reactive Stream ➔ Local Cache ➔ UI Notification",
      keyDecision: "Designed defensive stream subscription listeners with explicit lifecycle disposal to prevent background memory bloat."
    }
  }
];
