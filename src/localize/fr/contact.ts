export const contact = {
  hero: {
    sectionLabel: "Contact et Carrière",
    title: "Contactez-nous",
    description: "Connectez-vous avec notre équipe pour des demandes, des partenariats ou des opportunités de carrière.",
  },

  location: {
    sectionLabel: "Localisation",
    title: "Nous trouver",
    description: "Visitez notre bureau ou obtenez les directions vers notre emplacement.",
    companyName: "EBT Corporation",
    addressLabel: "Adresse",
    address: "#504, 54, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, République de Corée",
    phoneLabel: "Téléphone",
    phone: "+82-31-721-6375",
    emailLabel: "Email",
    emailDescription: "Demande générale - Questions sur EBTech et nos capacités",
    email: "info@ebtech.kr",
  },

  career: {
    sectionLabel: "Carrière",
    title: "Rejoignez EBT",
    description: "Nous attendons les talents qui deviendront des leaders mondiaux.",
    applicationDocs: "Documents de candidature",
    download: "Télécharger",
    docs: [
      {
        title: "Formulaire de candidature (HWP)",
        description: "Fichier HWP coréen",
      },
      {
        title: "Formulaire de candidature (WORD)",
        description: "Fichier Word",
      },
      {
        title: "Formulaire de candidature (PDF)",
        description: "Fichier PDF",
      },
    ],
    resumeText: "Envoyez votre CV à",
  },
} as const

export type ContactStrings = typeof contact
