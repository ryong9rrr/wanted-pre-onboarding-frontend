import React, { useState, useCallback } from 'react'
import tokenStorage from '../utils/tokenStorage'

interface AuthState {
  token: string | null
  isLoggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

const initialAuthState: AuthState = {
  token: null,
  isLoggedIn: false,
  login: (token: string) => {
    return
  },
  logout: () => {
    return
  },
}

export const AuthContext = React.createContext(initialAuthState)

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(tokenStorage.getToken())

  const isLoggedIn = !!token

  const logout = useCallback(() => {
    setToken(null)
    tokenStorage.removeToken()
  }, [])

  const login = (token: string) => {
    setToken(token)
    tokenStorage.setToken(token)
  }

  const contextValue = {
    isLoggedIn,
    token,
    login,
    logout,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
