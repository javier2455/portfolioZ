import { createContext } from 'react'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const { getItem, setItem, removeItem } = useSessionStorage()
  const navigate = useNavigate()

  function login(user) {
    setItem('user', JSON.stringify(user))
    navigate('/')
  }

  function profile() {
    const user = getItem('user')
    return JSON.parse(user)
  }

  function logout() {
    removeItem('user')
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ login, logout, profile }}>
      {children}
    </AuthContext.Provider>
  )
}
