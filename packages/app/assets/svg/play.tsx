import Svg, { Path, SvgProps } from 'react-native-svg'
import { SvgComponent } from './types'

export const Play: SvgComponent = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 32 32">
      <Path
        fill="currentColor"
        d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28ZM8 6.69v18.62L24.925 16Z"
      />
    </Svg>
  )
}
