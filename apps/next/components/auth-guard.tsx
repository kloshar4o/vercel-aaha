import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { LoadingView } from 'app/design/layout'
import { AuthContext } from 'app/provider/auth/AuthContext'
import { checkSessionThrottle } from 'app/api/auth'
import { routes } from 'app/constants/routes'

export const AuthGuard = (props: { children: JSX.Element }) => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(true)
  const { authenticated, setAuthenticated, requestedPage, setRequestedPage } =
    useContext(AuthContext)

  useEffect(() => {
    // on initial load - run auth check
    checkAuth(router.asPath)

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', checkAuth)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeComplete', checkAuth)
    }
  }, [])

  function checkAuth(url: string) {
    const path = url.split('?')[0]
    const isLoginPage = path === routes.LOGIN
    checkSessionThrottle()
      .then(() => {
        //Valid session
        if (isLoginPage) router.push(routes.HOME).catch(() => {})
      })
      .catch(() => {
        //Invalid session
        if (authenticated) setAuthenticated(false)
        if (!isLoginPage) {
          setRequestedPage(url) //Save the page user was trying to visit
          router.push(routes.LOGIN).catch(() => {})
        }
      })
      .finally(() => {
        //Wait for redirection
        setTimeout(() => setLoading(false), 250)
      })
  }

  useEffect(() => {
    //Handle authorization
    if (authenticated && !isLoading) {
      if (requestedPage) router.push(requestedPage)
      else router.push(routes.HOME)
    }
  }, [authenticated])

  return isLoading ? <LoadingView /> : props.children
}
