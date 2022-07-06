export function msToTime(s = 0) {
  const pad = (n = 0) => ('00' + n).slice(-2)

  let ms = s % 1000
  s = (s - ms) / 1000
  let secs = s % 60
  s = (s - secs) / 60
  let mins = s % 60
  let hrs = (s - mins) / 60

  let timeString = pad(mins) + ':' + pad(secs)
  if (hrs) timeString = pad(hrs) + ':' + timeString

  return timeString
}

export function average(numbers: number[]) {
  const sum = numbers.reduce((a, b) => a + b, 0)
  return sum / numbers.length || 0
}
