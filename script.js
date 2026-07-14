document.addEventListener("DOMContentLoaded", function () {
  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header
  const header = document.querySelector("header");
  function onScroll() {
    header.classList.toggle("sticky", window.scrollY > 60);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav: close on link click or outside click
  const navToggle = document.getElementById("nav-toggle");
  document.querySelectorAll("nav ul a").forEach((a) =>
    a.addEventListener("click", () => {
      if (navToggle) navToggle.checked = false;
    })
  );
  document.addEventListener("click", (e) => {
    if (navToggle && navToggle.checked && !e.target.closest("nav")) {
      navToggle.checked = false;
    }
  });

  // Scroll reveal
  const targets = document.querySelectorAll(
    ".section-header, .about-text, .about-stats .stat-box, .service-card, .project-card, .client-card, .contact-info, .contact-form, .hero-content"
  );
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));
});
