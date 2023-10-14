function DessertsList (props) {
  // Implement the component here.
  const listItems = props.data
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => (
      <li key={dessert.id}>
        {dessert.name} - {dessert.calories} cal
      </li>
    ))

  return (
    <ul>
      <li>{listItems}</li>
    </ul>
  )
}

export default DessertsList
