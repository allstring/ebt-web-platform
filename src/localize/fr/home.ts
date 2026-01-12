export const home = {
  hero: {
    title: "Technologie de défense pour les opérations critiques",
    description1: "Intégration de systèmes et ingénierie de précision pour la guerre électronique,",
    description2: "la guerre chimique et la guerre biologique.",
    exploreSolutions: "Explorer les solutions",
    contactUs: "Nous contacter",
  },

  solutions: {
    sectionLabel: "Solutions",
    sectionTitle: "Systèmes de défense intégrés",
    learnMore: "En savoir plus",
    items: [
      {
        title: "Guerre électronique",
        description:
          "Systèmes avancés de traitement du signal et de gestion du spectre pour les environnements opérationnels complexes.",
      },
      {
        title: "Guerre chimique",
        description:
          "Systèmes avancés de détection, d'identification et de surveillance des agents chimiques dans les environnements contestés et dangereux.",
      },
      {
        title: "Guerre biologique",
        description:
          "Systèmes de détection et d'analyse haute sensibilité conçus pour identifier les menaces biologiques et soutenir les opérations de réponse rapide.",
      },
    ],
  },

  featured: {
    label: "Produit phare",
    title: "RESOLVE",
    description:
      "Notre plateforme de défense intégrée phare, combinant la fusion de capteurs avancée avec l'analyse des menaces en temps réel et la coordination des réponses.",
    features: [
      "Détection des menaces multi-domaines",
      "Intégration des données en temps réel",
      "Architecture évolutive",
    ],
    viewSpecs: "Voir les spécifications",
    imageAlt: "Interface de la plateforme de défense RESOLVE",
  },

  capabilities: {
    sectionLabel: "Pourquoi EBTech",
    sectionTitle: "Excellence en ingénierie",
    sectionDescription:
      "Nous combinons une technologie de pointe avec des pratiques d'ingénierie éprouvées pour fournir des solutions critiques qui dépassent les attentes. Notre engagement envers l'excellence guide tout ce que nous faisons.",
    items: [
      {
        title: "Conception de systèmes de bout en bout",
        description:
          "Services complets de conception et d'intégration de systèmes garantissant un fonctionnement transparent sur tous les composants et plateformes.",
      },
      {
        title: "Déploiement éprouvé sur le terrain",
        description:
          "Solutions éprouvées au combat avec une vaste expérience de déploiement sur le terrain et une infrastructure de support fiable.",
      },
      {
        title: "R&D continue",
        description:
          "Recherche et développement continus pour anticiper les menaces émergentes et les exigences opérationnelles évolutives.",
      },
      {
        title: "Fiabilité critique",
        description:
          "Conçu pour les normes les plus élevées de fiabilité et de performance dans les environnements opérationnels exigeants.",
      },
      {
        title: "Équipe d'ingénierie experte",
        description:
          "Équipe d'ingénieurs dédiée avec une expertise approfondie dans les technologies de défense et l'intégration de systèmes.",
      },
      {
        title: "Solutions personnalisées",
        description:
          "Solutions sur mesure conçues pour répondre aux besoins opérationnels spécifiques et aux exigences d'intégration.",
      },
    ],
  },

  cta: {
    title: "Prêt à discuter de vos besoins ?",
    description: "Connectez-vous avec notre équipe d'ingénierie.",
    contactUs: "Nous contacter",
  },
} as const

export type HomeStrings = typeof home
