import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from 'app/features/user/home-screen'
import { UserLoginScreen } from 'app/features/user/login-screen'
import { useContext, useState } from 'react'
import { AuthContext } from 'app/provider/auth/AuthContext'
import { checkSessionThrottle } from 'app/api/auth'
import { LoadingView } from 'app/design/layout'
import { screens } from 'app/constants/routes'

const Stack = createNativeStackNavigator()

export function NativeNavigation() {
  const [isLoading, setLoading] = useState(true)
  const { authenticated, setAuthenticated } = useContext(AuthContext)

  checkSessionThrottle()
    .catch(() => setAuthenticated(false))
    .finally(() => setTimeout(() => setLoading(false), 250))

  return isLoading ? (
    //Splash screen
    <LoadingView />
  ) : !authenticated ? (
    //Login screen
    <Stack.Navigator>
      <Stack.Screen
        name={screens.LOGIN}
        component={UserLoginScreen}
        options={{
          headerShown: false,
          title: 'Login',
        }}
      />
    </Stack.Navigator>
  ) : (
    //All others screens
    <Stack.Navigator>
      <Stack.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Welcome',
        }}
      />
    </Stack.Navigator>
  )
}
