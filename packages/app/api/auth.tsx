let sessionThrottling = false
let fakeValidSession = false

export const login = (username: string, password: string) => {
  return new Promise((resolve) => {
    fakeValidSession = true
    return setTimeout(resolve.bind({}, { username, password }), 300)
  })
}

export const checkSession = () => {
  return new Promise((resolve, reject) => setTimeout(reject, 500))
}

export const checkSessionThrottle = () => {
  if (fakeValidSession) return Promise.resolve()
  setTimeout(() => (sessionThrottling = false), 60000)
  if (sessionThrottling) return Promise.resolve()
  sessionThrottling = true
  return checkSession().catch((e) => {
    sessionThrottling = false
    return Promise.reject(e)
  })
}
