import { Stopwatch } from 'ts-stopwatch'
import { getDistanceMoved } from '../sensors/geo-location'
import { average } from '../utils/calculations'

let stopwatch = new Stopwatch()
let lastTickDuration = 0
let distanceKM = 0
let paceLog: number[] = []
let caloriesBurned = 0

export class RunningService {
  reset() {
    stopwatch.reset()
    lastTickDuration = 0
    distanceKM = 0
    paceLog = []
    caloriesBurned = 0
  }

  start() {
    stopwatch.start()
  }

  stop() {
    stopwatch.stop()
  }

  get isRunning() {
    return stopwatch.isRunning()
  }

  get intervalSinceLastTick() {
    return stopwatch.getTime() - lastTickDuration
  }

  get stats() {
    return {
      distanceKM,
      caloriesBurned,
      durationMS: lastTickDuration,
      averagePaceMs: average(paceLog),
    }
  }

  tick() {
    const duration = stopwatch.getTime()

    //Sum total distance in kilometres
    const distanceMoved = getDistanceMoved(this.intervalSinceLastTick)
    distanceKM = distanceKM + distanceMoved

    //Average duration it takes to run a kilometer
    if (this.intervalSinceLastTick) paceLog.push(duration / distanceKM)

    //Calories burned
    caloriesBurned = distanceKM * 80

    //Save last tick
    lastTickDuration = duration
  }
}
