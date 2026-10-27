/**
 * Skills & Capabilities Data
 * Truthful, non-inflated assessment with direct evidence links to real projects.
 * Zero percentage bars or arbitrary numeric meters.
 */

export const skillCategories = [
  {
    categoryName: "Core Technologies",
    description: "Primary languages and frameworks utilized daily in building scalable applications.",
    skills: [
      {
        name: "Flutter (Mobile & Desktop)",
        level: "Strong",
        levelBadge: "Core Competency",
        evidence: "EduApp (Mobile), BacOnHands (Windows Desktop), VetERP (Windows/Linux Desktop), plus 3 commercial Firebase apps.",
        focus: "Widget composition, responsive layout builders, desktop window customization, custom painters, lifecycle management."
      },
      {
        name: "Dart",
        level: "Strong",
        levelBadge: "Core Language",
        evidence: "Underlying language for all Flutter projects. Strong command of sound null safety, async/await streams, isolates, and records.",
        focus: "Asynchronous programming, Streams, FFI bindings, sealed classes, pattern matching, robust OOP design."
      }
    ]
  },
  {
    categoryName: "State Management & Architecture",
    description: "Designing predictable data flows, modular codebases, and maintainable app structures.",
    skills: [
      {
        name: "BLoC & Cubit",
        level: "Practical",
        levelBadge: "Daily Use",
        evidence: "Primary state layer across VetERP, EduApp, and commercial client applications.",
        focus: "Unidirectional data flow, event-driven state machines, granular rebuild optimization with BlocBuilder & BlocSelector."
      },
      {
        name: "Clean Architecture",
        level: "Practical",
        levelBadge: "Production Pattern",
        evidence: "Applied in EduApp architecture refactoring and VetERP multi-layered structure.",
        focus: "Separation of Presentation, Domain (Entities & UseCases), and Data layers (DataSources & Repositories)."
      },
      {
        name: "GoRouter (Declarative Routing)",
        level: "Practical",
        levelBadge: "Production Pattern",
        evidence: "Deep routing in BacOnHands and ShellRoute nested navigation shells in VetERP.",
        focus: "Persistent desktop navigation shells, URL synchronization, type-safe route parameters, redirect guards."
      }
    ]
  },
  {
    categoryName: "Databases, Backends & Offline Sync",
    description: "Data persistence, cloud infrastructure, and offline-first storage engines.",
    skills: [
      {
        name: "SQLite & sqflite_common_ffi",
        level: "Practical",
        levelBadge: "Desktop Persistence",
        evidence: "VetERP practice management core data storage across 7 relational tables.",
        focus: "Native C-level FFI bindings, complex joins, schema migrations, and local database backup pipelines."
      },
      {
        name: "Supabase & PostgreSQL",
        level: "Practical",
        levelBadge: "Cloud Backend",
        evidence: "Backend foundation for EduApp (إلمام).",
        focus: "Relational data modeling, Row Level Security, Supabase Auth, and real-time socket events."
      },
      {
        name: "Firebase Ecosystem",
        level: "Practical",
        levelBadge: "Production Backend",
        evidence: "Used across 3 completed commercial mobile Flutter applications.",
        focus: "Firebase Authentication, Cloud Firestore (caching & offline sync), Firebase Storage, Cloud Messaging."
      },
      {
        name: "Spring Boot",
        level: "Learning",
        levelBadge: "Active Direction",
        evidence: "Currently studying enterprise Java backend development, REST API design, and Spring Data JPA.",
        focus: "Deepening full-stack understanding to build cohesive end-to-end client systems."
      }
    ]
  },
  {
    categoryName: "Desktop Integration & Tooling",
    description: "Targeting desktop platforms with native controls, hardware acceleration, and developer tooling.",
    skills: [
      {
        name: "Desktop UX & Native Integrations",
        level: "Practical",
        levelBadge: "Specialized",
        evidence: "BacOnHands (Fluent UI & MediaKit) and VetERP (Window management & custom menus).",
        focus: "Fluent UI design system, hardware video playback via libmpv, window resizing constraints, desktop shortcuts."
      },
      {
        name: "Git & Version Control",
        level: "Practical",
        levelBadge: "Standard Workflow",
        evidence: "Source code versioning, feature branches, semantic commits, and merge hygiene across private repositories.",
        focus: "Defensive branching, commit clarity, conflict resolution, GitHub Pages deployment."
      }
    ]
  }
];
