import Card from '../../Components/Card/Card.js'
import './CardContainer.css'

const CardContainer = () => (
  <div className='component-container' id='card-container'>
    <h1>Card Practice</h1>
    <Card h2="First card's h2" h3="First card's h3" />
    <Card h2="Second card's h2" h3="Second card's h3" />
    <Card h2="Third card's h2" h3="Third card's h3" />
  </div>
)

export default CardContainer
