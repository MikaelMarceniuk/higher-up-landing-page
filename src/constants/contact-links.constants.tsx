export const CONTACT_LINKS = {
  whatsapp: 'https://wa.me/5516992218981',
  instagram: 'https://www.instagram.com/higherupenglish/',
  linkedin: 'https://www.linkedin.com/company/higher-up-english/',
  youtube: 'https://www.youtube.com/@higherupbusinessenglish',
}

export const whatsappWithText = (text: string) =>
  `${CONTACT_LINKS.whatsapp}?text=${encodeURIComponent(text)}`
