import { Screen } from 'app/design/layout'
import { TextInput, View, Image, Text } from 'react-native'
import { useContext, useEffect, useRef, useState } from 'react'
import { FormInput, KeyboardAvoid } from 'app/design/form'
import { CustomButton } from 'app/design/buttons'
import { AuthContext } from 'app/provider/auth/AuthContext'

export function UserLoginScreen() {
  const { authorize } = useContext(AuthContext)
  const [username, setUsername] = useState('demo')
  const [password, setPassword] = useState('demo')

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => setUsernameError(''), [username])
  useEffect(() => setPasswordError(''), [password])

  const [submitting, setSubmitting] = useState(false)
  const passwordInput = useRef<TextInput>(null)

  const onLogin = () => {
    if (usernameError || passwordError) return
    if (!username) setUsernameError('Username input is required')
    if (!password) setPasswordError('Password input is required')
    if (!username || !password) return
    if (submitting) return
    setSubmitting(true)
    return authorize(username, password).catch(() => setSubmitting(false))
  }

  return (
    <KeyboardAvoid>
      <Screen className="items-center justify-center">
        <View className="mx-auto w-full max-w-sm px-4">
          <Image
            className="mb-4 h-16 w-full"
            resizeMode="contain"
            source={require('app/assets/img/logo.png')}
          />
          <FormInput
            label="Username"
            autoComplete="username"
            placeholder="Enter your username or email"
            value={username}
            onChangeText={setUsername}
            onSubmitEditing={() => passwordInput.current?.focus()}
            disabled={submitting}
            blurOnSubmit={false}
            error={usernameError}
          />
          <FormInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={onLogin.bind({})}
            disabled={submitting}
            secureTextEntry={true}
            ref={passwordInput}
            error={passwordError}
          />
          <CustomButton
            onPress={onLogin.bind({})}
            className="mt-14 w-full"
            loading={submitting}
            disabled={!!(passwordError || usernameError)}
          >
            <Text className="text-lg font-bold">Sign In</Text>
          </CustomButton>
        </View>
      </Screen>
    </KeyboardAvoid>
  )
}
