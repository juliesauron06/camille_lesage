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

   NOTE : ces avis sont des EXEMPLES, à remplacer par les vrais avis de Camille.
   ============================================================================= */
const REVIEWS = [
  {
    name: "Marie L.",
    rating: 5,
    date: "2025-04",
    text: "Une journée absolument inoubliable ! Camille connaît le Japon sur le bout des doigts et partage mille anecdotes passionnantes. On ne voit pas le temps passer.",
  },
  {
    name: "Thomas & Julie",
    rating: 5,
    date: "2025-03",
    text: "Guide francophone exceptionnelle. Camille s'est adaptée à nos envies et nous a fait découvrir un Tokyo authentique, loin des sentiers battus. Merci pour tout !",
  },
  {
    name: "Sophie B.",
    rating: 5,
    date: "2025-02",
    text: "Passionnée, drôle et d'une grande culture. Nos enfants ont adoré autant que nous. On recommande les yeux fermés pour une première fois au Japon.",
  },
  {
    name: "Claire D.",
    rating: 4,
    date: "2025-01",
    text: "Très belle expérience, riche en découvertes et en explications historiques. Une guide chaleureuse qui aime profondément son pays d'adoption.",
  },
  {
    name: "Antoine R.",
    rating: 5,
    date: "2024-12",
    text: "Le souci du détail et la gentillesse de Camille font toute la différence. Chaque visite était parfaitement organisée et pleine de surprises.",
  },
  {
    name: "Hélène et Marc",
    rating: 5,
    date: "2024-11",
    text: "Nous garderons un souvenir ému de notre visite avec Camille. Son amour du Japon est communicatif et ses recommandations étaient toutes excellentes.",
  },
  {
    name: "Nicolas P.",
    rating: 5,
    date: "2024-10",
    text: "Une rencontre marquante de notre voyage. Camille rend la culture japonaise vivante et accessible. À ne manquer sous aucun prétexte !",
  },
];
