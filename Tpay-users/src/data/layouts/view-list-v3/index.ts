const apiKeyValues = localStorage.getItem('apiKeys')
const apiKeyValue = localStorage.getItem('apiKey')

export const offers = [
  {
    id: '1',
    logo: '/demo/photos/apps/key.jpg',
    title: apiKeyValues || 'Valeur non disponible',
    duration: 'API PRIVATE KEY',
  },
  {
    id: '2',
    logo: '/demo/photos/apps/key.jpg',
    title: apiKeyValue || 'Valeur non disponible',
    duration: 'API PUBLIQUE KEY',
  },
  /* {
    id: '3',
    logo: '/demo/photos/brands/slack.svg',
    title: 'UI/UX Designer to Consolidate the UX Team 💪💪',
    location: 'Los Angeles',
    duration: 'Full Time',
    requirements: '3 Years Exp.',
  },*/
]
