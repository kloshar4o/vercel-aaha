import Svg, { Path, SvgProps } from 'react-native-svg'
import { SvgComponent } from './types'

export const Pause: SvgComponent = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <Path
        fill="currentColor"
        d="M10 18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12Zm7 0a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v12Z"
      />
    </Svg>
  )
}
