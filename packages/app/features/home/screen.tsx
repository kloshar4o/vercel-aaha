import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RightArrow from '../../assets/svg/right-arrow'
import { useRouter } from 'solito/router'
import { H1, P, Text } from 'app/design/typography'

export function HomeScreen() {
  const { push } = useRouter()
  return (
    <View className="flex-1">
      <View className="flex-1">
        <ImageBackground
          source={require('app/assets/img/running.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#2a2a2a', '#555555', '#2a2a2a', '#2a2a2a']}
        className="p-8"
      >
        <H1 className="text-white">
          <Text className="text-kiwi">Track</Text> your runs accurately
        </H1>
        <P className="text-[#a2a2a2] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, fugiat
          in incidunt magnam molestias
        </P>
        <TouchableOpacity onPress={() => push('/user/fernando')}>
          <View className="overflow-hidden rounded-3xl">
            <LinearGradient
              // Button Linear Gradient
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              colors={['#717171', 'transparent']}
              className="flex-row justify-between items-center p-2"
            >
              <Text className="text-lg pl-4 text-gray-300">Get Started</Text>
              <View className="bg-kiwi h-14 w-14 rounded-2xl p-5">
                <RightArrow className="text-black" />
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}
