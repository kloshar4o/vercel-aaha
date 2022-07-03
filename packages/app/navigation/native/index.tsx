import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { UserWelcomeScreen } from '../../features/user/welcome-screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import { UserLoginScreen } from '../../features/user/login-screen'

const Stack = createNativeStackNavigator<{
  'user-login': undefined
  'user-welcome': undefined
  'user-detail': {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="user-login"
        component={UserLoginScreen}
        options={{
          headerShown: false,
          title: 'Login',
        }}
      />
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
