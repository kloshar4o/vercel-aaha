import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo, ReactNode, useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export function NavigationProvider({ children }: { children: ReactNode }) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'user-login',
            screens: {
              'user-welcome': '',
              'user-login': 'login',
              'user-detail': 'user/:id',
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
