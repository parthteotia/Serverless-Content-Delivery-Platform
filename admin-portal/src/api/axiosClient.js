import axios from 'axios'
import { API_BASE } from '../utils/config'


const instance = axios.create({
baseURL: API_BASE,
timeout: 15000,
})


// Attach tokens if you implement auth tokens later
instance.interceptors.request.use((cfg) => {
// TODO: attach Authorization header if you use JWT from Cognito
return cfg
})


export default instance