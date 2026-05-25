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

// Avis clients : affiche automatiquement les 6 meilleurs (note décroissante, puis récence)
const reviewsGrid = document.querySelector("[data-reviews]");

if (reviewsGrid && typeof REVIEWS !== "undefined" && Array.isArray(REVIEWS)) {
  const SVG_NS = "http://www.w3.org/2000/svg";

  const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  };

  const buildStars = (rating) => {
    const stars = document.createElement("div");
    stars.className = "review-card__stars";
    stars.setAttribute("role", "img");
    stars.setAttribute("aria-label", `Noté ${rating} sur 5`);
    for (let i = 1; i <= 5; i += 1) {
      const svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("class", i <= rating ? "review-card__star" : "review-card__star is-empty");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      const use = document.createElementNS(SVG_NS, "use");
      use.setAttribute("href", "#icon-star");
      svg.appendChild(use);
      stars.appendChild(svg);
    }
    return stars;
  };

  const buildCard = (review) => {
    const rating = Math.max(0, Math.min(5, Math.round(review.rating || 0)));
    const card = document.createElement("figure");
    card.className = "review-card";
    card.appendChild(buildStars(rating));

    const quote = document.createElement("blockquote");
    quote.className = "review-card__text";
    const paragraph = document.createElement("p");
    paragraph.textContent = `« ${review.text} »`;
    quote.appendChild(paragraph);
    card.appendChild(quote);

    const caption = document.createElement("figcaption");
    caption.className = "review-card__author";
    const name = document.createElement("span");
    name.className = "review-card__name";
    name.textContent = review.name || "";
    caption.appendChild(name);

    const formattedDate = formatDate(review.date);
    if (formattedDate) {
      const date = document.createElement("span");
      date.className = "review-card__date";
      date.textContent = formattedDate;
      caption.appendChild(date);
    }
    card.appendChild(caption);
    return card;
  };

  const topReviews = REVIEWS
    .filter((review) => review && review.text)
    .sort((a, b) => b.rating - a.rating || new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  if (topReviews.length > 0) {
    const fragment = document.createDocumentFragment();
    topReviews.forEach((review) => fragment.appendChild(buildCard(review)));
    reviewsGrid.replaceChildren(fragment);
  }
}
