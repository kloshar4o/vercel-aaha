import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { UserWelcomeScreen } from '../../features/user/welcome-screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { UserLoginScreen } from '../../features/user/login-screen'
import { useContext, useState } from 'react'
import { AuthContext } from '../../provider/auth/AuthContext'
import { checkSessionThrottle } from '../../api/auth'
import { LoadingView } from '../../design/layout'

const Stack = createNativeStackNavigator<{
  'user-login': undefined
  'user-welcome': undefined
  'user-detail': { id: string }
}>()

export function NativeNavigation() {
  const [isLoading, setLoading] = useState(true)
  const { authenticated, setAuthenticated } = useContext(AuthContext)

  checkSessionThrottle()
    .catch(() => setAuthenticated(false))
    .finally(() => setTimeout(() => setLoading(false), 250))

  return isLoading ? (
    <LoadingView />
  ) : !authenticated ? (
    <Stack.Navigator>
      <Stack.Screen
        name="user-login"
        component={UserLoginScreen}
        options={{
          headerShown: false,
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="user-welcome"
        component={UserWelcomeScreen}
        options={{
          headerShown: false,
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  )
}
