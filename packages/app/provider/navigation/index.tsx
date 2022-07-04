import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { routes, screens } from 'app/constants/routes'
import { useMemo, ReactNode } from 'react'

export function NavigationProvider({ children }: { children: ReactNode }) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('')],
          config: {
            initialRouteName: screens.HOME,
            screens: {
              [screens.HOME]: routes.HOME,
              [screens.LOGIN]: routes.LOGIN,
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
