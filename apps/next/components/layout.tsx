import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { LoadingView } from 'app/design/layout'
import { AuthContext } from 'app/provider/auth/AuthContext'
import { useRouter } from 'next/router'
import { checkSessionThrottle } from 'app/api/auth'

export const Layout = (props: { children: any }) => {
  const [isLoading, setLoading] = useState(true)
  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const router = useRouter()
  const isLoginPage = router.pathname === '/login'

  useEffect(() => {
    checkSessionThrottle()
      .then(() => {
        if (isLoginPage) router.push('/').catch(() => {})
      })
      .catch(() => {
        if (authenticated) setAuthenticated(false)
        if (!isLoginPage) router.push('/login').catch(() => {})
      })
      .finally(() => setTimeout(() => setLoading(false), 250))
  }, [])

  useEffect(() => {
    if (authenticated && !isLoading) router.push('/')
  }, [authenticated])

  return isLoading ? <LoadingView /> : props.children
}
