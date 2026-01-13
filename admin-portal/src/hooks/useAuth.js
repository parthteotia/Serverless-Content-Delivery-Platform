import { useState, useEffect } from 'react'
import { COGNITO_DOMAIN, COGNITO_CLIENT_ID, COGNITO_REDIRECT_URI } from '../utils/config'


export function useAuth() {
const [loading, setLoading] = useState(true)
const [isAuthenticated, setIsAuthenticated] = useState(false)
const [user, setUser] = useState(null)


useEffect(() => {
// Minimal session check: if access_token present in localStorage
const t = localStorage.getItem('access_token')
if (t) {
setIsAuthenticated(true)
setUser({})
}
setLoading(false)
}, [])


return { loading, isAuthenticated, user }
}