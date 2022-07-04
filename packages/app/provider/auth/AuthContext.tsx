import React from 'react'

export type IAuthContext = {
  authenticated: boolean
  authorize: (username: string, password: string) => Promise<any>
  setAuthenticated: (isAuthenticated: boolean) => void
}

export const AuthContext = React.createContext<IAuthContext>({
  authenticated: true,
  authorize: Promise.resolve,
  setAuthenticated: () => {},
})
