export const about = {
  hero: {
    sectionLabel: "À propos d'EBT",
    title1: "Votre partenaire de confiance dans",
    title2: "les technologies de défense avancées",
    description1:
      "Chez EBT Co., Ltd., nous sommes fiers d'être à la pointe de la technologie et de l'innovation dans les domaines de la guerre électronique, de la guerre biologique et de la défense contre la guerre chimique. Notre mission est de fournir des solutions de pointe qui permettent à nos clients de protéger leurs personnes et leurs actifs contre les menaces émergentes dans un monde en constante évolution.",
    description2:
      "Des agences gouvernementales et opérateurs d'infrastructures critiques aux entreprises commerciales et aux particuliers, nous offrons une gamme diversifiée de produits et services adaptés à vos exigences spécifiques et environnements opérationnels.",
  },

  whyChoose: {
    sectionLabel: "Pourquoi choisir EBT",
    title: "Impulser l'innovation",
    description:
      "Nous nous consacrons à repousser les limites de l'avancement technologique. Notre équipe d'experts développe constamment des solutions innovantes qui vous donnent l'avantage face aux menaces en évolution.",
    cards: [
      {
        title: "Solutions complètes",
        description:
          "Nous comprenons que chaque client a des besoins uniques. Nous offrons une gamme diversifiée de produits et services adaptés à vos exigences spécifiques dans les domaines gouvernementaux, d'infrastructures critiques et commerciaux.",
      },
      {
        title: "Excellence prouvée",
        description:
          "Avec un solide historique de réussite, nous avons une histoire de développement et de livraison de technologies de pointe qui dépassent les attentes, construisant une confiance à long terme avec nos partenaires.",
      },
    ],
  },

  vision: {
    sectionLabel: "Vision",
    title: "Créer un monde où les gens peuvent vivre et travailler en sécurité et en confiance",
    description:
      "La vision d'EBT est de créer un monde où les gens peuvent vivre et travailler en sécurité et en confiance, libérés de la peur des menaces environnementales et biologiques. Nous nous concentrons sur la fourniture de technologies et de systèmes qui surveillent, détectent et répondent en continu aux risques invisibles dans l'air et l'environnement qui nous entourent.",
  },

  mission: {
    sectionLabel: "Mission",
    title: "Protéger la santé et la sécurité des personnes",
    description:
      "La mission d'EBT est de protéger la santé et la sécurité des personnes. Nous nous efforçons de protéger les gens contre la pollution atmosphérique, les infections virales et d'autres facteurs environnementaux nocifs. Sur la base de ces technologies de base, nous fournissons des solutions dans divers domaines, notamment l'amélioration de la qualité de l'air intérieur, la prévention des infections virales et la protection contre d'autres conditions dangereuses.",
  },

  capabilities: {
    sectionLabel: "Capacités principales",
    title: "Ce que nous livrons",
    description:
      "Nous concevons, intégrons et supportons des solutions prêtes pour la mission dans les domaines de la guerre électronique, NRBC et anti-UAS. Notre objectif est de transformer les flux de travail complexes de détection et de décision en capacités claires et fiables sur le terrain.",
    items: [
      {
        title: "Guerre électronique",
        description: "Systèmes de détection, de radiogoniométrie et de brouillage dans des environnements RF complexes.",
      },
      {
        title: "Anti-UAS",
        description: "Détection, classification et neutralisation des menaces émergentes de drones en temps réel.",
      },
      {
        title: "Surveillance NRBC",
        description: "Alerte précoce et surveillance continue des dangers chimiques et biologiques.",
      },
      {
        title: "Intégration de systèmes",
        description: "Intégration de bout en bout avec les plateformes, capteurs et réseaux C2 existants.",
      },
      {
        title: "Formation et support",
        description: "Support de déploiement, formation des opérateurs et services de cycle de vie sur le terrain.",
      },
      {
        title: "Données et analytique",
        description: "Outils qui transforment les données des capteurs en informations exploitables pour de meilleures décisions.",
      },
    ],
  },
} as const

export type AboutStrings = typeof about
