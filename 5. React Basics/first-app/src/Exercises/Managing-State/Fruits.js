import React from 'react'

function Fruits () {
  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 }
  ])

  return (
    <div>
      {fruits.map(fruit => <p key={fruit.id}>{fruit.fruitName}</p>)}
    </div>
  )
}

export default Fruits
