import { ActivityIndicator, View } from 'react-native'
import { styled } from 'tailwindcss-react-native'
import { SafeArea } from 'app/provider/safe-area'

export const Row = styled(View, 'flex-row')

export const LoadingView = (props: {}) => {
  /* Using styles since they are loaded faster than tailwind classes */
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#111827', //gray-900
      }}
      {...props}
    >
      <ActivityIndicator size="large" />
    </View>
  )
}
export const Screen = (props: any) => {
  return (
    <View className="flex-1 justify-center bg-gray-900">
      <SafeArea>
        <View
          className="mx-auto w-full max-w-lg max-w-lg flex-1 shadow"
          {...props}
        >
          {props.children}
        </View>
      </SafeArea>
    </View>
  )
}
