import { useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { checkSessionThrottle } from 'app/api/auth'
import { LoadingView } from 'app/design/layout'
import { AuthContext } from 'app/provider/auth/AuthContext'
import { screens } from 'app/constants/routes'
import { HomeScreen } from 'app/features/user/home-screen'
import { RunningScreen } from 'app/features/user/running-screen'
import { UserLoginScreen } from 'app/features/user/login-screen'

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
        }}
      />
      <Stack.Screen
        name={screens.RUNNING}
        component={RunningScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
