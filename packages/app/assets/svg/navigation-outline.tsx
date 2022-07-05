import Svg, { Circle, Path, SvgProps, G } from 'react-native-svg'
import { SvgComponent } from './types'

export const NavigationOutline: SvgComponent = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <G fill="none" stroke="currentColor" strokeWidth="1.5">
        <Circle stroke="currentColor" cx="12" cy="12" r="10" />
        <Path
          fill="none"
          d="M17.873 15.475c.46.87-.437 1.831-1.336 1.432l-4.538-2.017l-4.537 2.017c-.9.4-1.797-.562-1.337-1.432l4.959-9.365a1.036 1.036 0 0 1 1.831 0l4.958 9.365Z"
        />
      </G>
    </Svg>
  )
}
