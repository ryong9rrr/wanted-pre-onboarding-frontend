import React, { useState, useCallback } from 'react'
import { TokenServiceInterface } from '../interface'

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

export const AuthContextProvider = ({
  children,
  tokenService,
}: {
  children: React.ReactNode
  tokenService: TokenServiceInterface
}) => {
  const [token, setToken] = useState(tokenService.getToken())

  const isLoggedIn = !!token

  const logout = useCallback(() => {
    setToken(null)
    tokenService.removeToken()
  }, [])

  const login = (token: string) => {
    setToken(token)
    tokenService.setToken(token)
  }

  const contextValue = {
    isLoggedIn,
    token,
    login,
    logout,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
