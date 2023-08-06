import React from 'react'
import Fruits from './Fruits'
import FruitsCounter from './FruitsCounter'

function StateExample () {
  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 }
  ])

  return (
    <div className='StateExample'>
      <h1>Managing State</h1>
      <h2>Where should the state go?</h2>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  )
}

export default StateExample
