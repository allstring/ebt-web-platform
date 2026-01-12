export const solution = {
  label: "Solutions",
  title: "Systèmes de défense axés sur les problèmes",
  description:
    "Chaque solution répond à des défis opérationnels spécifiques avec du matériel et des logiciels intégrés conçus pour un déploiement réel.",
  learnMore: "En savoir plus",
  electronicWarfare: {
    title: "Guerre électronique",
    summary:
      "Traitement du signal et gestion du spectre pour les environnements électromagnétiques complexes.",
  },
  chemicalWarfare: {
    title: "Guerre chimique",
    summary:
      "Systèmes de détection, d'identification et de surveillance des agents chimiques en environnements opérationnels dangereux.",
  },
  biologicalWarfare: {
    title: "Guerre biologique",
    summary:
      "Systèmes de détection et d'analyse haute sensibilité pour l'identification précoce des menaces biologiques.",
  },
} as const

export type SolutionStrings = typeof solution
