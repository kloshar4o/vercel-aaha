import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { styled, StyledProps } from 'tailwindcss-react-native'

export const Touchable = styled(TouchableOpacity)

interface TouchableProps extends StyledProps<TouchableOpacityProps> {
  loading?: boolean
}

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
