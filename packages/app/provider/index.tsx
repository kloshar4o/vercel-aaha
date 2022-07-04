import React from 'react'
import { NavigationProvider } from './navigation'
import { TailwindProvider } from 'tailwindcss-react-native'
import { AuthProvider } from './auth/AuthProvider'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NavigationProvider>
        <TailwindProvider preview={true}>{children}</TailwindProvider>
      </NavigationProvider>
    </AuthProvider>
  )
}
