// Menu de navigation mobile
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (navToggle && primaryNav) {
  const setMenu = (open) => {
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    primaryNav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  // Fermer le menu après un clic sur un lien
  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  // Réinitialiser en repassant sur desktop
  window.matchMedia("(min-width: 951px)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });
}

// La navigation n'apparaît qu'une fois la section accueil dépassée
const siteHeader = document.querySelector(".site-header");
const heroSection = document.querySelector("#accueil");

if (siteHeader && heroSection && "IntersectionObserver" in window) {
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      siteHeader.classList.toggle("is-visible", !entry.isIntersecting);
    },
    { threshold: 0 }
  );
  heroObserver.observe(heroSection);
} else if (siteHeader) {
  // Repli (navigateur sans IntersectionObserver) : nav toujours visible
  siteHeader.classList.add("is-visible");
}

// « Voir plus / Voir moins » dans la section À propos
const aboutToggle = document.querySelector(".link-toggle");
const aboutMore = document.querySelector("#about-more");

if (aboutToggle && aboutMore) {
  const aboutSection = document.querySelector("#apropos");

  aboutToggle.addEventListener("click", () => {
    const expanded = aboutToggle.getAttribute("aria-expanded") === "true";
    aboutToggle.setAttribute("aria-expanded", String(!expanded));
    aboutMore.hidden = expanded;
    aboutToggle.textContent = expanded ? "Voir plus" : "Voir moins";

    // Au repli (« Voir moins »), revenir au début de la section
    if (expanded && aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// Pop-ups des visites guidées
document.querySelectorAll("[data-tour-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = document.getElementById(btn.dataset.tourOpen);
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
      document.body.classList.add("modal-open");
    }
  });
});

document.querySelectorAll(".tour-modal").forEach((dialog) => {
  dialog.querySelectorAll("[data-tour-close]").forEach((btn) => {
    btn.addEventListener("click", () => dialog.close());
  });

  // Fermer en cliquant sur le fond
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  // Nettoyage à la fermeture (croix, fond ou touche Échap)
  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
});

// CTA « Réserver » : fermer la pop-up puis défiler vers le formulaire de contact
document.querySelectorAll("[data-tour-reserve]").forEach((cta) => {
  cta.addEventListener("click", (event) => {
    event.preventDefault();
    const dialog = cta.closest(".tour-modal");
    if (dialog) dialog.close();
    const contact = document.querySelector("#contact");
    if (contact) {
      window.requestAnimationFrame(() => {
        contact.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
});
