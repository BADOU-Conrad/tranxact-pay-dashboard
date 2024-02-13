// src/services/api.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Remplacez par l'URL réelle de votre API Laravel
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  // Exemple d'endpoints pour l'authentification
  login(credentials) {
    return apiClient.post('/login', credentials)
  },

  register(userData) {
    return apiClient.post('/register', userData)
  },

  // Ajoutez d'autres méthodes pour les différents endpoints ici...
}
