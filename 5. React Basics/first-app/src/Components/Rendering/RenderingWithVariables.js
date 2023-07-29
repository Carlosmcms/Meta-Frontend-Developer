import WeekendsMessage from './WeekendsMessage'
import WorkdaysMessage from './WorkdaysMessage'

const RenderingWithVariables = ({ day }) => {
  const weekday = (day >= 1 && day <= 5)
  const weekend = (day >= 6 && day <= 7)
  let message

  if (weekday) {
    message = <WorkdaysMessage />
  } else if (weekend) {
    message = <WeekendsMessage />
  } else {
    message = 'There is no valid day'
  }

  return (
    <>
      {message}
    </>
  )
}

export default RenderingWithVariables
