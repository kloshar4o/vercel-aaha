import Svg, { Path, SvgProps } from 'react-native-svg'
import { SvgComponent } from './types'

export const RunFast: SvgComponent = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <Path
        fill="currentColor"
        d="M16.5 5.5a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3A7.298 7.298 0 0 0 22 13v-2c-1.76.03-3.4-.89-4.3-2.4l-1-1.6c-.36-.6-1-1-1.7-1c-.3 0-.5.1-.8.1L9 8.3V13h2V9.6l1.8-.7l-1.6 8.1l-4.9-1l-.4 2l7 1.4M4 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3v2H4m1-4a1 1 0 0 1-1-1a1 1 0 0 1 1-1h5v2H5m-2 8a1 1 0 0 1-1-1a1 1 0 0 1 1-1h4v2H3Z"
      />
    </Svg>
  )
}
