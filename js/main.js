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
