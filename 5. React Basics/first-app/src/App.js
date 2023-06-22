import Heading from './Components/Heading.js'
import Card from './Components/Card.js'
import NumberGuess from './Components/NumberGuess.js'
import './App.css'

const App = () => (
  <div className='App'>
    <div id='heading-practice'>
      <h1>Heading Practice</h1>
      <Heading firstName='Bob' />
      <Heading firstName='Mary' />
    </div>
    <div id='card-container'>
      <h1>Card Practice</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </div>
    <div id='event-handle'>
      <h1>Event Handle Practice</h1>
      <NumberGuess />
    </div>
  </div>
)

export default App
