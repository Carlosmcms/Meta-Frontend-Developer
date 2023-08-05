import desserts from './desserts'

const topDesserts = desserts.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price
  }
})

export default function TransformListsExample () {
  console.log(topDesserts)
  return <h1>Examine the console output.</h1>
}
