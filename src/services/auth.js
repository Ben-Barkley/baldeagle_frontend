import axios from 'axios'
const baseUrl = 'http://142.4.6.101:32771/api/auth'

const login = async (credentials) => {
  const response =  await axios.post(`${baseUrl}/authenticate`, credentials)
  console.log('login function called')
  return response.data
}

const register = async (obj) => {
    const response = await axios.post(`${baseUrl}/register`, obj)
    return response.data
}

export default { login, register }
