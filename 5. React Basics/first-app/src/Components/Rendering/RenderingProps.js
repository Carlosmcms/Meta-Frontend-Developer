import WeekendsMessage from './WeekendsMessage'
import WorkdaysMessage from './WorkdaysMessage'

const RenderingProps = props => (
  props.day >= 1 && props.day <= 5
    ? <WorkdaysMessage />
    : <WeekendsMessage />
)

export default RenderingProps
