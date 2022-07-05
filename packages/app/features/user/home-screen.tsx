import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RightArrow } from 'app/assets/svg/right-arrow'
import { useRouter } from 'solito/router'
import { H1, P, Text } from 'app/design/typography'
import { Row, Screen } from 'app/design/layout'
import { routes } from 'app/constants/routes'
import { CustomButton } from 'app/design/buttons'
import { colors } from '../../constants/colors'

export function HomeScreen() {
  const { push } = useRouter()
  const getStarted = () => push(routes.RUNNING)

  const GreenColumn = (props: any) => (
    <View className="mx-2 overflow-hidden rounded-3xl">
      <LinearGradient
        colors={[colors.lime['400'], 'transparent']}
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
          colors={[
            colors.zinc['900'],
            colors.zinc['700'],
            colors.zinc['800'],
            colors.zinc['900'],
          ]}
        >
          <H1>
            <Text className="text-lime-400">Track</Text>
            <Text className="text-white"> your runs accurately</Text>
          </H1>
          <P className="text-muted mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
            fugiat in incidunt magnam molestias
          </P>
          <TouchableOpacity activeOpacity={0.6} onPress={getStarted}>
            <View className="overflow-hidden rounded-3xl opacity-100 transition hover:opacity-80">
              <LinearGradient
                // Button Linear Gradient
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                colors={[colors.zinc['600'], colors.zinc['900']]}
              >
                <Row className="items-center justify-between p-2">
                  <Text className="pl-4 text-lg text-white">Get Started</Text>
                  <CustomButton className="h-16 w-16" onPress={getStarted}>
                    <RightArrow className="h-4 w-4 text-black" />
                  </CustomButton>
                </Row>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Screen>
  )
}
