import React, { useMemo, useState } from 'react'
import { AuthContext } from './AuthContext'
import { login } from 'app/api/auth'

export const AuthProvider = (props: { children: JSX.Element }): JSX.Element => {
  const [authenticated, setAuthenticated] = useState(true)
  const [requestedPage, setRequestedPage] = useState('')

  const authorize = (username: string, password: string) =>
    login(username, password).then((response) => {
      setAuthenticated(true)
      return response
    })

  const contextValue = useMemo(() => {
    return {
      authorize,
      authenticated,
      setAuthenticated,
      requestedPage,
      setRequestedPage,
    }
  }, [authenticated])

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}
