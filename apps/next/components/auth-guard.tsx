import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { LoadingView } from 'app/design/layout'
import { AuthContext } from 'app/provider/auth/AuthContext'
import { checkSessionThrottle } from 'app/api/auth'
import { routes } from 'app/constants/routes'

export const AuthGuard = (props: { children: JSX.Element }) => {
  const [isLoading, setLoading] = useState(true)
  const { authenticated, setAuthenticated } = useContext(AuthContext)
  const router = useRouter()
  const isLoginPage = router.pathname === routes.LOGIN

  useEffect(() => {
    checkSessionThrottle()
      .then(() => {
        //Valid session
        if (isLoginPage) router.push(routes.HOME).catch(() => {})
      })
      .catch(() => {
        //Invalid session
        if (authenticated) setAuthenticated(false)
        if (!isLoginPage) router.push(routes.LOGIN).catch(() => {})
      })
      .finally(() => {
        //Wait for redirection
        setTimeout(() => setLoading(false), 250)
      })
  }, [])

  useEffect(() => {
    //Handle authorization
    if (authenticated && !isLoading) router.push(routes.HOME)
  }, [authenticated])

  return isLoading ? <LoadingView /> : props.children
}
