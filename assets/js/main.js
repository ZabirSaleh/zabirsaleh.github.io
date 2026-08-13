(() => {
  const CONFIG = {
    email: "z4abir@gmail.com",
    github: "https://github.com/ZabirSaleh",
    linkedin: "https://www.linkedin.com/in/zabir-saleh/"
  };

  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = `mailto:${CONFIG.email}`;
    if (el.dataset.email === "text") el.textContent = CONFIG.email;
  });

  document.querySelectorAll("[data-github]").forEach((el) => {
    el.href = CONFIG.github;
  });

  document.querySelectorAll("[data-linkedin]").forEach((el) => {
    el.href = CONFIG.linkedin;
  });

  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("open");
      mobileNav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const revealEls = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll("[data-section-link]")];

  if (sections.length && "IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", isActive);
      });
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, .1, .5] });

    sections.forEach((section) => navObserver.observe(section));
  }

  document.querySelectorAll("[data-print]").forEach((btn) => {
    btn.addEventListener("click", () => window.print());
  });

  document.querySelectorAll("[data-copy-email]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const old = btn.textContent;
      try {
        await navigator.clipboard.writeText(CONFIG.email);
        btn.textContent = "Email copied";
      } catch {
        btn.textContent = CONFIG.email;
      }
      setTimeout(() => btn.textContent = old, 1800);
    });
  });
})();
