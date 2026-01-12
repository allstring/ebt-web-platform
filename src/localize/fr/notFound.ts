export const notFound = {
  title: "Page non trouvée",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  goHome: "Accueil",
  goBack: "Retour",
} as const

export type NotFoundStrings = typeof notFound
