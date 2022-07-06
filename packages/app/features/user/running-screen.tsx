import { useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'solito/router'
import { msToTime } from 'app/utils/calculations'
import { colors } from 'app/constants/colors'
import { Row, Screen } from 'app/design/layout'
import { Text } from 'app/design/typography'
import { CustomButton, Touchable } from 'app/design/buttons'
import { SvgComponent } from 'app/assets/svg/types'
import { RightArrow } from 'app/assets/svg/right-arrow'
import { Gps } from 'app/assets/svg/gps'
import { NavigationOutline } from 'app/assets/svg/navigation-outline'
import { RunFast } from 'app/assets/svg/run-fast'
import { FireOutline } from 'app/assets/svg/fire-outline'
import { StopWatch } from 'app/assets/svg/stop-watch'
import { Pause } from 'app/assets/svg/pause'
import { Route } from 'app/assets/svg/route'
import { CheckOutline } from 'app/assets/svg/check-outline'
import { Play } from 'app/assets/svg/play'
import { RunningService } from '../../services/running-service'

const runningService = new RunningService()

export function RunningScreen() {
  const [isRunning, setIsRunning] = useState(runningService.isRunning)
  const [runningStats, setRunningStats] = useState(runningService.stats)

  useEffect(() => {
    if (isRunning) runningService.start()
    else runningService.stop()

    const tickStopwatch = setTimeout(() => {
      runningService.tick()
      setRunningStats(runningService.stats)
    }, 250)

    return () => clearTimeout(tickStopwatch)
  }, [isRunning, runningStats])

  const finalize = () => {
    runningService.reset()
    setIsRunning(false)
    setRunningStats(runningService.stats)
  }

  return (
    <Screen>
      <SafeAreaView className="flex flex-1 flex-col justify-between pb-8">
        <Header />
        <GPSIndicator />
        <NaviImage isRunning={isRunning} />
        <DistanceCounter distanceKM={runningStats.distanceKM} />
        <Row className="mx-6 mt-8 justify-between rounded-2xl bg-zinc-800 p-6">
          <DatumColumn
            Icon={RunFast}
            label="Avg Pace"
            value={msToTime(runningStats.averagePaceMs)}
          />
          <DatumColumn
            Icon={FireOutline}
            label="Calories"
            value={runningStats.caloriesBurned.toFixed()}
          />
          <DatumColumn
            Icon={StopWatch}
            label="Duration"
            value={msToTime(runningStats.durationMS)}
          />
        </Row>
        <Row className="mt-8 items-center justify-center">
          <CustomButton className="bg-zinc-800">
            <Route height={26} width={26} className="text-white" />
          </CustomButton>
          {isRunning ? (
            <CustomButton className="mx-10" onPress={() => setIsRunning(false)}>
              <Pause height={45} width={45} className="text-black" />
            </CustomButton>
          ) : (
            <CustomButton
              className="mx-10 bg-zinc-800"
              onPress={() => setIsRunning(true)}
            >
              <Play height={45} width={45} className="text-white" />
            </CustomButton>
          )}
          <CustomButton className="bg-zinc-800" onPress={finalize}>
            <CheckOutline height={26} width={26} className="text-white" />
          </CustomButton>
        </Row>
      </SafeAreaView>
    </Screen>
  )
}

function DatumColumn(props: {
  Icon: SvgComponent
  value: string
  label: string
}) {
  const { Icon } = props
  return (
    <View className="w-20 items-center">
      <Icon height={24} width={24} className="mb-2 text-white" />
      <Text className="text-2xl text-white">{props.value}</Text>
      <Text className="text mt-2 text-zinc-500">{props.label}</Text>
    </View>
  )
}

function Header() {
  const router = useRouter()
  return (
    <Row className="items-center justify-between">
      <Touchable
        className="p-4"
        activeOpacity={0.6}
        onPress={() => router.back()}
      >
        <RightArrow
          width={16}
          height={16}
          style={{ transform: [{ rotate: '180deg' }] }}
          color="white"
        />
      </Touchable>
      <Text className="text-lg font-semibold text-white">Running</Text>
      <Touchable className="p-4" activeOpacity={0.6}>
        <Text className="relative -top-2 text-lg font-semibold text-white">
          ...
        </Text>
      </Touchable>
    </Row>
  )
}

function GPSIndicator() {
  return (
    <Row className="mt-8 justify-center">
      <Row className="items-center rounded-3xl bg-zinc-800 p-2 px-4">
        <Gps width={14} height={14} color="white" />
        <Text className="ml-1 font-bold text-white">GPS</Text>
      </Row>
    </Row>
  )
}

function NaviImage(props: { isRunning: boolean }) {
  return (
    <Row className="mt-8 justify-center">
      <View
        className={`
          w-48 overflow-hidden rounded-t-full transition-all
          ${props.isRunning ? 'h-64 rounded-t-full' : 'mb-16 h-48 rounded-full'}
        `}
      >
        <LinearGradient
          className="h-full w-full "
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[colors.zinc['800'], 'black']}
        >
          <View className="m-8 h-32 w-32 overflow-hidden rounded-full">
            <LinearGradient
              className="h-full w-full"
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={[colors.zinc['800'], colors.zinc['800']]}
            >
              <View className="m-4 h-24 h-24 overflow-hidden rounded-full">
                <LinearGradient
                  className="h-full w-full items-center justify-center"
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 1, y: 1 }}
                  colors={[colors.zinc['700'], colors.zinc['900']]}
                >
                  <NavigationOutline
                    width={55}
                    height={55}
                    className={props.isRunning ? 'text-lime-400' : 'text-white'}
                  />
                </LinearGradient>
              </View>
            </LinearGradient>
          </View>
        </LinearGradient>
      </View>
    </Row>
  )
}

function DistanceCounter(props: { distanceKM: number }) {
  return (
    <View className="-mt-20 items-center justify-center">
      <Text className="text-7xl text-white">{props.distanceKM.toFixed(2)}</Text>
      <Text className="mt-4 text-lg text-zinc-500">Distance KM</Text>
    </View>
  )
}
