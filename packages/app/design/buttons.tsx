import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { styled } from 'tailwindcss-react-native'

interface TouchableProps extends TouchableOpacityProps {
  className?: string
  loading?: boolean
}
export const Touchable = styled(TouchableOpacity)

export const CustomButton = (props: TouchableProps) => {
  return (
    <Touchable
      {...props}
      activeOpacity={0.6}
      className={`
        flex flex-row items-center justify-center bg-lime-400 p-4 opacity-100 transition hover:opacity-80
        ${props.loading || props.disabled ? 'bg-gray-400' : ''}
      `}
    >
      <Text className="text-lg font-bold text-lime-900">{props.children}</Text>
      {props.loading && (
        <ActivityIndicator className="ml-2" size="small" color="black" />
      )}
    </Touchable>
  )
}
