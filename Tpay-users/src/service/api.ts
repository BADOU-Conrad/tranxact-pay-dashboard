import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.1.3:8000/user', // Remplacez par l'URL réelle de votre API Laravel
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

interface Credentials {
  email: string
  password: string
  // Ajoutez d'autres champs si nécessaire
}
interface UserData {
  // Ajoutez les propriétés nécessaires ici
  username: string
  email: string
  password: string
  // ... autres propriétés ...
}

export default {
  // Exemple d'endpoints pour l'authentification
  login(credentials: Credentials) {
    return apiClient.post('/login', credentials)
  },

  register(userData: UserData) {
    return apiClient.post('/register', userData)
  },

  // Ajoutez d'autres méthodes pour les différents endpoints ici...
}
