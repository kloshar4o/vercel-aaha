import React, { FC, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext'
import { login } from '../../api/auth'

export type AuthProviderProps = {
  defaultAuthenticated?: boolean
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true)

  const authorize = (username: string, password: string) =>
    login(username, password).then((response) => {
      setAuthenticated(true)
      return response
    })

  const contextValue = useMemo(() => {
    return {
      authenticated,
      setAuthenticated,
      authorize,
    }
  }, [authenticated])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
