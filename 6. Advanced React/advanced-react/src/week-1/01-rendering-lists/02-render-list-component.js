import desserts from './desserts'

export default function RenderingListComponent () {
  const listItems = desserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li key={dessert.id}>{itemText}</li>
  })

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}
