import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.0.147:8000/api', // 'https://api.tranxactpay.me/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

const updateHeadersWithAuth = () => {
  const token = localStorage.getItem('token')
  const apiKey = localStorage.getItem('apiKey')

  if (token && apiKey) {
    console.log('Token:', token)
    console.log('API Key:', apiKey)
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    apiClient.defaults.headers.common['X-API-Key'] = apiKey
  } else {
    console.warn('Token ou API key manquant')
  }
}

interface Credentials {
  email: string
  password: string
}

interface UserData {
  first_name: string
  last_name: string
  email: string
  country_id: string
  account_type_id: string
  password: string
  password_confirmation: string
  profilePicture: File | undefined
}

interface UserDataUpdate {
  first_name: string
  last_name: string
  email: string
  country_id: string
  account_type_id: string
  phone: string
  desc: string
}

interface LinkData {
  name_link: string
  click_number: number
  amount: number
  desc: string
}

interface BeneficiaryData {
  id: number
  b_name: string
  b_number: string
  b_email: string
  b_compte: string
}

interface GuessData {
  name: string
  email: string
  role: string
}

interface UserProfile {
  id: number
  user_id: number
  phone_number: string
  identify_pic: string
  num_cn: string
  num_ifu: string
  num_rccm: string
  doc_path_all: string
  address: string
}

const logRequestHeaders = (config: AxiosRequestConfig) => {
  console.log('Headers de la requête :', config.headers)
  return config
}

interface PasswordChange {
  old_password: string
  password: string
  password_confirmation: string
}

apiClient.interceptors.request.use(logRequestHeaders)

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
        formData.append(key, value)
      }
    })

    return apiClient.post('/user/register', formData)
  },

  userVerify(userProfile: UserProfile) {
    updateHeadersWithAuth()
    return apiClient.post('/user/profil/complete', userProfile)
  },

  storeGuess(guessData: GuessData) {
    updateHeadersWithAuth()
    return apiClient.post('/guess/store', guessData)
  },

  getGuessall() {
    updateHeadersWithAuth()
    return apiClient.get('/guess/all')
  },

  getApi_Key(user_id: string) {
    updateHeadersWithAuth()
    return apiClient.get(`/api_key/${user_id}`)
  },

  getDispute() {
    updateHeadersWithAuth()
    return apiClient.get('/dispute/all')
  },

  deleteGuess(id_invitation: string) {
    updateHeadersWithAuth()
    return apiClient.delete(`/guess/delete/${id_invitation}`)
  },

  getUserdetails() {
    updateHeadersWithAuth()
    return apiClient.get('/user/current/details')
  },

  getCountries() {
    updateHeadersWithAuth()

    return apiClient.get('/country/all')
  },

  getAccountTypes() {
    return apiClient.get('/account_type/all')
  },

  storeLink(linkData: LinkData) {
    updateHeadersWithAuth()
    return apiClient.post('/link/store', linkData)
  },

  passwordChange(PasswordChange: PasswordChange) {
    updateHeadersWithAuth()
    return apiClient.post('/user/change_password', PasswordChange)
  },

  updateUserDetails(UserDataUpdate: UserDataUpdate) {
    updateHeadersWithAuth()
    return apiClient.post('/user/update/current_user', UserDataUpdate)
  },

  getCollect() {
    updateHeadersWithAuth()
    return apiClient.get('/collect/stories')
  },

  getLink() {
    updateHeadersWithAuth()
    return apiClient.get('/link/all')
  },

  getLinkDetails(linkId: string) {
    updateHeadersWithAuth()
    return apiClient.get(`/link/${linkId}`)
  },

  deleteLink(linkId: string) {
    updateHeadersWithAuth()
    return apiClient.delete(`/link/delete/${linkId}`)
  },

  storeBeneficiary(BeneficiaryData: BeneficiaryData) {
    updateHeadersWithAuth()
    return apiClient.post('/user/beneficiary/store', BeneficiaryData)
  },

  getBeneficiary() {
    updateHeadersWithAuth()
    return apiClient.get('/user/beneficiary/all')
  },

  deleteBeneficiary(beneficiaryId: string) {
    updateHeadersWithAuth()
    return apiClient.delete(`/user/beneficiary/delete/${beneficiaryId}`)
  },
}
