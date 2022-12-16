import React, { useState, useCallback, useMemo } from 'react'
import { AuthServiceInterface, TokenServiceInterface } from '../interface'

interface AuthState {
  token: string | null
  isLoggedIn: boolean
  login: ({ email, password }: { email: string; password: string }) => void
  signup: ({ email, password }: { email: string; password: string }) => void
  logout: () => void
}

const initialAuthState: AuthState = {
  token: null,
  isLoggedIn: false,
  login: ({ email, password }: { email: string; password: string }) => {
    return
  },
  signup: ({ email, password }: { email: string; password: string }) => {
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
  authService,
}: {
  children: React.ReactNode
  tokenService: TokenServiceInterface
  authService: AuthServiceInterface
}) => {
  const [token, setToken] = useState(tokenService.getToken())

  const isLoggedIn = !!token

  const logout = () => {
    setToken(null)
    tokenService.removeToken()
  }

  const login = useCallback(
    async (values: { email: string; password: string }) => {
      const { access_token: token } = await authService.login(values)
      setToken(token)
      tokenService.setToken(token)
    },
    [token, authService, tokenService],
  )

  const signup = useMemo(() => authService.signup.bind(authService), [authService])

  const contextValue = useMemo(
    () => ({
      isLoggedIn,
      token,
      signup,
      login,
      logout,
    }),
    [isLoggedIn, token, signup, login, logout],
  )

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
