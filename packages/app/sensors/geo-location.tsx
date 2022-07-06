let runningSpeedKMH = 5
let increasingSpeed = true
export function getDistanceMoved(interval = 0) {
  //simulate different speeds
  if (increasingSpeed) runningSpeedKMH = runningSpeedKMH + 0.1
  else runningSpeedKMH = runningSpeedKMH - 0.1

  //toggle speed increase or decrease
  if (runningSpeedKMH > 14) increasingSpeed = false
  else if (runningSpeedKMH < 5) increasingSpeed = true

  //calculate distance
  const hoursDuration = interval / 3600000
  return hoursDuration * runningSpeedKMH
}
