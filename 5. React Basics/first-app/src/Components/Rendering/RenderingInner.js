import WeekendsMessage from './WeekendsMessage'
import WorkdaysMessage from './WorkdaysMessage'

const CurrentMessage = () => {
  const day = new Date().getDay()

  return day >= 1 && day <= 5
    ? <WorkdaysMessage />
    : <WeekendsMessage />
}

export default CurrentMessage
