/* =============================================================================
   AVIS CLIENTS
   -----------------------------------------------------------------------------
   Liste des avis affichés dans la section « Avis clients ».
   Le site sélectionne et affiche AUTOMATIQUEMENT les 6 meilleurs :
   d'abord la note (de la plus haute à la plus basse), puis, à note égale,
   les plus récents. Vous pouvez donc en ajouter autant que vous voulez ici.

   Pour chaque avis :
     - name   : prénom + initiale (ex. "Marie L.")
     - rating : note sur 5 (un nombre entier de 1 à 5)
     - date   : "AAAA-MM" (année-mois) — sert au tri par récence
     - text   : le texte de l'avis

   NOTE : avis réels de clients (Google), retranscrits tels quels.
   La date correspond au mois indiqué par « Visité en… » sur Google.
   ============================================================================= */
const REVIEWS = [
  {
    name: "Julie S.",
    rating: 5,
    date: "2025-08",
    text: "Camille transmet sa passion du Japon à travers des explications, des visites et des expériences très qualitatives! Organisée, solaire et pédagogue, c'est très agréable de découvrir le Japon en sa compagnie. Elle sait s'adapter à nos profils et à nos envies, que l'on soit amateur d'art, aventuriers, geek ou encore fin gourmet 😍",
  },
  {
    name: "Daniel P.",
    rating: 5,
    date: "2025-10",
    text: "Nous avons vécu une expérience mémorable pour notre premier séjour à Tokyo grâce à Camille. Elle a planifié un horaire de visites parfait, selon nos envies et intérêts, et même profité des temps de trajet pour nous renseigner sur l'histoire et la culture japonaise. Elle nous a aussi fait découvrir des coins charmants de la ville, hors des attraits touristiques habituels. Et tout ça avec sa générosité, sa bonne humeur et son beau sourire. Nous nous promettons de nouvelles découvertes avec elle lors de notre prochain séjour au Japon.",
  },
  {
    name: "Stéphanie B.",
    rating: 5,
    date: "2025-07",
    text: "Camille, c'est la personne comme on en rencontre peu dans sa vie; qui m'a fait penser toujours la connaître et qui a émerveillé ma découverte de Tokyo. J'étais seule avec mon fils de 7 ans pour visiter le pays. elle a été au petit soin pour nous, racontant des anecdotes japonaises à la portée d'Arthur. 9 mois plus tard nous parlons tjs de ce voyage et de Camille qui a marqué nos vies, un immense merci pour tout et bien évidemment je la recommande les yeux fermés à qui veut passer un moment inoubliable au Japon",
  },
  {
    name: "Joël F.",
    rating: 5,
    date: "2026-04",
    text: "Guide passionnée, enthousiaste qui a réussi à partager son amour de tokyo et du Japon. Attendez-vous à découvrir des lieux méconnus et à beaucoup marcher !!! Génial ! Toute la famille a adoré la visite avec Camille !",
  },
  {
    name: "Pauline L.",
    rating: 5,
    date: "2026-04",
    text: "Nous avons été enchantés d'avoir pu profiter de l'expérience et des connaissances de Camille lors de notre passage à Tokyo. Elle nous a fait découvrir des lieux emblématiques tout comme des pépites cachées, en restant très à l'écoute et en s'adaptant à notre programme. Nous avons aussi beaucoup apprécié ses conseils (les illuminations à Kyoto, matsuri à Tokyo) et sa réactivité lors de nos échanges. Dynamique et pétillante, Camille est passionnée par le Japon et est une mine d'informations sur son histoire et ses coutumes. Nous recommandons chaudement !",
  },
  {
    name: "Julien P.",
    rating: 5,
    date: "2025-09",
    text: "Nous avons eu la chance de découvrir Tokyo aux côtés de Camille, et l'expérience a été tout simplement exceptionnelle. Dès le premier contact, son professionnalisme et sa gentillesse nous ont mis en confiance. Sur place, Camille s'est révélée être une guide passionnée, cultivée et incroyablement attentive à nos attentes. Elle a su adapter le programme à nos envies tout en nous faisant sortir des sentiers battus, mêlant incontournables et découvertes plus confidentielles. Ses explications étaient toujours claires, vivantes et enrichissantes, avec de nombreuses anecdotes qui ont donné une véritable profondeur à chaque lieu visité. Au-delà de ses connaissances, nous avons particulièrement apprécié sa disponibilité, son sens de l'organisation et sa capacité à rendre chaque moment agréable et fluide. Grâce à elle, nous avons découvert Tokyo d'une manière authentique et mémorable. Nous recommandons Camille sans la moindre hésitation à toute personne souhaitant vivre une expérience unique et personnalisée. Un immense merci pour ces moments inoubliables !",
  },
];
