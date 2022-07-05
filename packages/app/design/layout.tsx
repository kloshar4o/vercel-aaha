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
        backgroundColor: 'black',
      }}
      {...props}
    >
      <ActivityIndicator size="large" />
    </View>
  )
}
export const Screen = (props: any) => {
  return (
    <View className="flex-1 justify-center bg-black">
      <View
        className="mx-auto w-full max-w-lg max-w-lg flex-1 shadow"
        {...props}
      >
        {props.children}
      </View>
    </View>
  )
}
