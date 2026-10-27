/**
 * Engineering Workflow & Client Value Proposition
 * Explains how Saleh Hammad works with clients to transform requirements
 * into stable, maintainable, production-ready Flutter applications.
 */

export const workflowSteps = [
  {
    stepNumber: "01",
    phase: "Requirement Clarification & Domain Modeling",
    summary: "Translating client ideas into explicit data models, screen flows, and system boundaries before writing code.",
    clientImpact: "Prevents costly mid-project architecture pivots and avoids building features on ambiguous assumptions.",
    details: [
      "Deconstruct business workflows into clear entities, relationships, and user roles.",
      "Identify offline requirements, caching needs, and cross-platform UX differences early.",
      "Determine non-functional constraints: startup time, memory budget, platform targets (mobile vs desktop)."
    ]
  },
  {
    stepNumber: "02",
    phase: "Architecture & State Strategy Selection",
    summary: "Structuring the codebase for long-term predictability using Clean Architecture and BLoC/Cubit.",
    clientImpact: "Ensures the application remains stable and easy to extend as new features or team members are added.",
    details: [
      "Isolate presentation components from business logic so changes in UI don't break data processing.",
      "Define explicit, testable states (Loading, Success, Failure, Reconnecting) to eliminate blank screens.",
      "Choose the simplest suitable backend integration (Supabase, Firebase, or SQLite) aligned with client budget."
    ]
  },
  {
    stepNumber: "03",
    phase: "AI-Augmented Implementation Pass",
    summary: "Using modern AI coding tools to accelerate boilerplate generation and explore API surfaces while keeping human review paramount.",
    clientImpact: "Delivers features significantly faster without sacrificing code quality or introducing security vulnerabilities.",
    details: [
      "Leverage AI for rapid generation of data models, serialization mappers, and unit test suites.",
      "Strict human verification of every AI output against race conditions, null safety, and memory lifecycles.",
      "Preserve rigorous coding standards and meaningful commit histories."
    ]
  },
  {
    stepNumber: "04",
    phase: "Edge Case Hardening & Bug Diagnosis",
    summary: "Proactively hunting down network dropouts, offline sync collisions, memory leaks, and desktop resizing glitches.",
    clientImpact: "Protects client reputation by preventing app crashes, data corruption, and negative user reviews.",
    details: [
      "Test against erratic connectivity (airplane mode toggles, slow 3G simulations, token expiry).",
      "Verify stream disposal and controller lifecycles to prevent background memory bloat.",
      "Test responsive layouts across varied mobile screens, tablets, and desktop window dimensions."
    ]
  },
  {
    stepNumber: "05",
    phase: "Deployment Preparation & Maintenance Handover",
    summary: "Ensuring smooth platform packaging, environment separation, and clean documentation for future maintenance.",
    clientImpact: "Eliminates vendor lock-in; clients receive a clean, readable repository that any qualified developer can continue.",
    details: [
      "Prepare clean release configurations, platform signing keys, and asset bundle audits.",
      "Provide clear architectural diagrams, setup guides, and environment configuration instructions.",
      "Maintain zero gratuitous external dependencies so maintenance overhead remains low."
    ]
  }
];

export const clientValueProps = [
  {
    title: "No Code Bloat or Ghost Dependencies",
    description: "Every package added to `pubspec.yaml` is vetted for maintenance activity, security, and bundle weight. Your app remains lean and easy to upgrade."
  },
  {
    title: "Truthful Status & Transparent Estimates",
    description: "No inflated promises or obscured blockers. You get clear technical assessments of what is built, what is in progress, and the exact trade-offs of each decision."
  },
  {
    title: "Local-First & Offline Resilience",
    description: "Whether building a mobile school portal or a desktop clinic ERP, applications are engineered to handle spotty connectivity without losing user data."
  },
  {
    title: "Human Oversight of AI Tools",
    description: "AI is used to accelerate the development tempo, but human engineering rigor ensures that architecture, data consistency, and security are never compromised."
  }
];
