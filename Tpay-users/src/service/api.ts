import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.1.3:8000', // Remplacez par l'URL réelle de votre API Laravel
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

interface Credentials {
  email: string
  password: string
}

interface UserData {
  firstName: string
  lastName: string
  email: string
  country: string
  accountType: string
  password: string
  profilePicture: File | undefined
}

export default {
  login(credentials: Credentials) {
    return apiClient.post('/user/login', credentials)
  },

  register(userData: UserData) {
    const formData = new FormData()
    Object.entries(userData).forEach(([key, value]) => {
      if (key === 'profilePicture') {
        formData.append(key, value)
      } else {
        formData.append(key, JSON.stringify(value))
      }
    })

    return apiClient.post('/user/register', formData)
  },

  getCountries() {
    return apiClient.get('/country/all')
  },

  getAccountTypes() {
    return apiClient.get('/account_type/all')
  },

  // Ajoutez d'autres méthodes pour les différents endpoints ici...
}
