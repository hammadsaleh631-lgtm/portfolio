/**
 * Interactive Logic & Dynamic DOM Rendering
 * Pure Vanilla JavaScript — zero dependencies, accessible, high performance.
 */

import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { skillCategories } from "../data/skills.js";
import { workflowSteps, clientValueProps } from "../data/workflow.js";

// Theme Controller
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  updateToggleIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme-preference", nextTheme);
    } catch (e) {}
    updateToggleIcon(toggleBtn, nextTheme);
  });
}

function updateToggleIcon(btn, theme) {
  const isDark = theme === "dark";
  btn.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  btn.innerHTML = isDark
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

// Navigation & Scroll Spy
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-menu-drawer");

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", String(!isExpanded));
      mobileDrawer.classList.toggle("is-open", !isExpanded);
    });

    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileDrawer.classList.remove("is-open");
      });
    });
  }

  // Active section scroll spy
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
              const href = link.getAttribute("href");
              if (href === `#${id}`) {
                link.classList.add("active");
                link.setAttribute("aria-current", "true");
              } else {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(sec => observer.observe(sec));
  }
}

// Render Hero Profile Avatar & Metadata
function renderHeroProfile() {
  const heroHeader = document.getElementById("hero-profile-area");
  if (!heroHeader) return;

  heroHeader.innerHTML = `
    <div class="hero-profile-header">
      <div class="avatar-frame">
        <img src="${profile.avatar}" alt="${profile.name} — Flutter Developer" class="avatar-img" width="82" height="82" />
        <span class="avatar-status-dot" title="Available for projects"></span>
      </div>
      <div class="hero-meta-title">
        <h2>${profile.name}</h2>
        <p>${profile.title} • ${profile.location.display}</p>
      </div>
    </div>
  `;
}

// Render Projects List with Filter Support
let activeFilter = "all";

function renderProjects() {
  const container = document.getElementById("projects-list");
  if (!container) return;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(p => p.category === activeFilter);

  container.innerHTML = filteredProjects
    .map(proj => {
      const badgeClass =
        proj.statusType === "active"
          ? "badge-active"
          : proj.statusType === "prototype"
          ? "badge-prototype"
          : "badge-completed";

      // Visual Banner (Screenshot or Branded Logo Banner)
      let bannerHtml = "";
      if (proj.image) {
        bannerHtml = `
          <div class="project-visual-banner" role="img" aria-label="${proj.title} Desktop Screenshot">
            <img src="${proj.image}" alt="${proj.title} User Interface Preview" class="project-screenshot-img" loading="lazy" />
          </div>
        `;
      } else if (proj.logo) {
        bannerHtml = `
          <div class="project-logo-banner">
            <div class="logo-display">
              <img src="${proj.logo}" alt="${proj.title} Logo" class="project-logo-img" />
              <div>
                <strong style="color: var(--text-primary); font-size: var(--text-lg); display: block;">${proj.title}</strong>
                <span style="color: var(--text-secondary); font-size: var(--text-xs);">${proj.categoryLabel}</span>
              </div>
            </div>
            ${
              proj.liveUrl
                ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                    <span>${proj.liveLabel || "Live Demo ↗"}</span>
                  </a>`
                : ""
            }
          </div>
        `;
      }

      // Screenshots Horizontal Gallery (For mobile apps: Elmam and POS)
      let galleryHtml = "";
      if (proj.screenshots && proj.screenshots.length > 0) {
        const itemsHtml = proj.screenshots
          .map(
            s => `
            <div class="screenshot-item">
              <div class="phone-mockup-frame">
                <img src="${s.src}" alt="${s.caption}" class="phone-screenshot-img" loading="lazy" />
              </div>
              <span class="screenshot-caption">${s.caption}</span>
            </div>`
          )
          .join("");

        galleryHtml = `
          <div class="project-gallery-wrapper">
            <div class="gallery-label">
              <span>App Interface Gallery</span>
              <span>•</span>
              <span>Live Screenshots</span>
            </div>
            <div class="screenshots-row">
              ${itemsHtml}
            </div>
          </div>
        `;
      }

      const featuresHtml = proj.features
        .map(
          f => `
          <li class="project-feature-item">
            <span class="feature-check">✓</span>
            <span>${f}</span>
          </li>`
        )
        .join("");

      const techPillsHtml = proj.techStack
        .map(t => `<span class="tech-pill">${t}</span>`)
        .join("");

      return `
        <article class="project-card" id="project-${proj.id}">
          ${bannerHtml}
          ${galleryHtml}

          <header class="project-card-header">
            <div class="project-title-area">
              <h3 class="project-title">${proj.title}</h3>
              <p class="project-subtitle">${proj.subtitle}</p>
            </div>
            <div class="project-meta-badges">
              <span class="badge ${badgeClass}">
                <span class="badge-dot"></span>
                ${proj.badge}
              </span>
              <span class="badge badge-neutral">${proj.repository.label}</span>
            </div>
          </header>

          <div class="project-card-body">
            <div>
              <p class="project-summary">${proj.summary}</p>
              <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.6; margin-bottom: var(--space-4);">
                ${proj.overview}
              </p>

              <h4 style="font-size: var(--text-xs); font-family: var(--font-mono); text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em; margin-bottom: var(--space-2);">
                Key Engineering Deliverables
              </h4>
              <ul class="project-features-list">
                ${featuresHtml}
              </ul>

              <div class="tech-pills">
                ${techPillsHtml}
              </div>
            </div>

            <div class="project-blueprint-box">
              <div>
                <div class="blueprint-header">
                  <span>Architecture Contract</span>
                  <span style="color: var(--accent-cyan);">Verified Flow</span>
                </div>
                <div class="blueprint-diagram">${proj.architectureDetails.dataFlow}</div>
                <div class="key-decision-note">
                  <strong style="color: var(--text-primary);">Engineering Rationale:</strong><br/>
                  ${proj.architectureDetails.keyDecision}
                </div>
              </div>

              ${
                proj.liveUrl
                  ? `<div style="margin-top: var(--space-4);">
                      <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="width: 100%;">
                        <span>Explore Live Monorepo Landing Page ↗</span>
                      </a>
                    </div>`
                  : ""
              }
            </div>
          </div>

          <footer class="project-card-footer">
            <span>Platform: ${proj.platform}</span>
            <div class="project-actions-row">
              ${
                proj.liveUrl
                  ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); font-weight: 600;">
                      ${proj.liveUrl.replace("https://", "")} ↗
                    </a>`
                  : `<span>Verified local codebase</span>`
              }
            </div>
          </footer>
        </article>
      `;
    })
    .join("");
}

// Project Filter Setup
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      renderProjects();
    });
  });
}

// Render Skills Matrix
function renderSkills() {
  const container = document.getElementById("skills-categories");
  if (!container) return;

  container.innerHTML = skillCategories
    .map(cat => {
      const cardsHtml = cat.skills
        .map(s => {
          const isStrong = s.level === "Strong";
          const isLearning = s.level === "Learning";
          const badgeClass = isStrong
            ? "badge-active"
            : isLearning
            ? "badge-prototype"
            : "badge-completed";

          return `
            <div class="skill-card">
              <div class="skill-card-top">
                <h4 class="skill-name">${s.name}</h4>
                <span class="badge ${badgeClass}">${s.levelBadge}</span>
              </div>
              <p class="skill-evidence">
                <strong style="color: var(--text-primary);">Evidence:</strong> ${s.evidence}
              </p>
              <div class="skill-focus">
                ${s.focus}
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div class="skills-category-group">
          <h3 class="skills-cat-title">
            <span style="color: var(--accent-cyan);">§</span>
            ${cat.categoryName}
          </h3>
          <p class="skills-cat-desc">${cat.description}</p>
          <div class="skills-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    })
    .join("");
}

// Render Engineering Workflow
function renderWorkflow() {
  const timelineContainer = document.getElementById("workflow-timeline");
  const valuePropsContainer = document.getElementById("client-value-props");

  if (timelineContainer) {
    timelineContainer.innerHTML = workflowSteps
      .map(
        step => `
        <div class="workflow-card">
          <div class="workflow-num">${step.stepNumber}</div>
          <div class="workflow-main">
            <h3>${step.phase}</h3>
            <p class="workflow-summary">${step.summary}</p>
            <ul class="workflow-list">
              ${step.details.map(d => `<li>${d}</li>`).join("")}
            </ul>
          </div>
          <div class="workflow-impact">
            <div class="impact-title">Client Protection</div>
            <div class="impact-desc">${step.clientImpact}</div>
          </div>
        </div>
      `
      )
      .join("");
  }

  if (valuePropsContainer) {
    valuePropsContainer.innerHTML = clientValueProps
      .map(
        vp => `
        <div class="value-prop-card">
          <h4>${vp.title}</h4>
          <p>${vp.description}</p>
        </div>
      `
      )
      .join("");
  }
}

// Interactive Architecture Inspector
function initInspector() {
  const tabs = document.querySelectorAll(".inspector-tab");
  const panes = document.querySelectorAll(".inspector-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      tabs.forEach(t => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      panes.forEach(p => p.classList.remove("is-active"));

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const activePane = document.getElementById(targetId);
      if (activePane) activePane.classList.add("is-active");
    });
  });
}

// Copy to Clipboard with Toast Notification
function initCopyTriggers() {
  const copyButtons = document.querySelectorAll("[data-copy]");
  const toast = document.getElementById("toast-notice");

  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          showToast(toast, `Copied "${textToCopy}" to clipboard!`);
        })
        .catch(() => {
          const textarea = document.createElement("textarea");
          textarea.value = textToCopy;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
          showToast(toast, `Copied to clipboard!`);
        });
    });
  });
}

function showToast(toast, msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("is-visible");
  setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

// Boot
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  renderHeroProfile();
  renderProjects();
  initProjectFilters();
  renderSkills();
  renderWorkflow();
  initInspector();
  initCopyTriggers();
});
