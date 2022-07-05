import React from 'react'

export type IAuthContext = {
  authorize: (username: string, password: string) => Promise<any>
  authenticated: boolean
  setAuthenticated: (isAuthenticated: boolean) => void
  requestedPage: string
  setRequestedPage: (url: string) => void
}

export const AuthContext = React.createContext<IAuthContext>({
  authorize: (username = '', password = '') => Promise.resolve(undefined),
  authenticated: false,
  setAuthenticated: (isAuthenticated = false) => {},
  requestedPage: '',
  setRequestedPage: (url = '') => {},
})
