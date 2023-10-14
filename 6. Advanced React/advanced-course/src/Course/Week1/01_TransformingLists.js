const desserts = [
  {
    id: '1',
    title: 'Tiramisu',
    description: 'The best tiramisu in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$5.00'
  },
  {
    id: '2',
    title: 'Lemon Ice Cream',
    description: 'Mind blowing taste',
    image: 'https://picsum.photos/200/300/?random',
    price: '$4.50'
  },
  {
    id: '3',
    title: 'Chocolate Mousse',
    description: 'Unexplored flavour',
    image: 'https://picsum.photos/200/300/?random',
    price: '$6.00'
  }
]

const topDesserts = desserts.map(dessert => {
  return {
    id: dessert.id,
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price
  }
})

/*
const TransformingLists = () => {
  console.log(topDesserts)
  return <h1>Check the console output</h1>
}
*/

function TransformingLists () {
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.content} - ${dessert.price}`
    console.log(dessert)

    return <li key={dessert.id}>{itemText}</li>
  })

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default TransformingLists
