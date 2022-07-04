import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RightArrow from '../../assets/svg/right-arrow'
import { useRouter } from 'solito/router'
import { H1, P, Text } from 'app/design/typography'
import { Row, Screen } from '../../design/layout'

export function UserWelcomeScreen() {
  const { push } = useRouter()

  const GreenColumn = (props: any) => (
    <View className="mx-2 overflow-hidden rounded-3xl">
      <LinearGradient
        colors={['#9be83b', 'transparent']}
        className="w-4"
        {...props}
      />
    </View>
  )
  return (
    <Screen>
      <ImageBackground
        source={require('app/assets/img/running.jpg')}
        style={{ flex: 1 }}
        resizeMode="cover"
      />
      <View>
        <Row className="absolute bottom-full right-6 z-[1] -mb-12 items-end justify-between">
          <GreenColumn className="h-36" />
          <GreenColumn className="h-48" />
          <GreenColumn className="h-36" />
        </Row>
        <LinearGradient
          className="p-8 pt-12"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#2a2a2a', '#555555', '#2a2a2a', '#2a2a2a']}
        >
          <H1>
            <Text className="text-lime-400">Track</Text>
            <Text className="text-white"> your runs accurately</Text>
          </H1>
          <P className="text-muted mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            fugiat in incidunt magnam molestias
          </P>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => push('/user/fernando')}
          >
            <View className="overflow-hidden rounded-3xl opacity-100 transition hover:opacity-80">
              <LinearGradient
                // Button Linear Gradient
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                colors={['#717171', 'transparent']}
              >
                <Row className="items-center justify-between p-2">
                  <Text className="pl-4 text-lg text-white">Get Started</Text>
                  <View className="h-14 w-14 rounded-2xl bg-lime-400 p-5">
                    <RightArrow className="text-black" />
                  </View>
                </Row>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Screen>
  )
}
