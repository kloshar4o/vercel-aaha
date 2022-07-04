import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { forwardRef } from 'react'

export interface FormInputProps extends TextInputProps {
  label?: string
  disabled?: boolean
  error?: string
}

export const FormInput = forwardRef<TextInput, FormInputProps>((props, ref) => {
  return (
    <View className="mt-4">
      {props.label && (
        <Text
          className={`
            mb-2 text-lg 
            ${props.error ? 'text-red-500' : 'text-white'}
          `}
        >
          {props.label}
        </Text>
      )}
      <TextInput
        className={`
          rounded border bg-gray-700 p-4 text-white transition focus:ring-blue-500
          ${props.disabled ? 'text-gray-500' : 'text-white'}
          ${
            props.error
              ? 'border-red-300 text-red-500'
              : 'border-gray-300 text-white'
          }
        `}
        autoComplete="email"
        placeholderTextColor="#9CA3AF" //gray-400
        editable={!props.disabled}
        ref={ref}
        {...props}
      />
      {!!props.error && (
        <Text className={`mt-2  text-red-500`}>{props.error}</Text>
      )}
    </View>
  )
})

FormInput.displayName = 'FormInput'

export const KeyboardAvoid = (props: { children: any }) => {
  if (Platform.OS === 'web')
    return <View className="flex-1">{props.children}</View>
  else
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {props.children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
}
