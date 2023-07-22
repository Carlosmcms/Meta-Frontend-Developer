import Heading from './Components/Heading.js'
import Card from './Components/Card/Card.js'
import NumberGuess from './Components/NumberGuess.js'
import InputComponent from './Components/InputComponent.js'
import RegisterForm from './Components/RegisterForm.js'
import ReducerExampleComponent from './Components/ReducerExampleComponent.js'

import './App.css'

const App = () => (
  <div className='App'>
    <div className='component-container' id='heading-practice'>
      <h1>Heading Practice</h1>
      <Heading firstName='Bob' />
      <Heading firstName='Mary' />
    </div>
    <div className='component-container' id='card-container'>
      <h1>Card Practice</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </div>
    <div className='component-container' id='event-handle'>
      <h1>Event Handle Practice</h1>
      <NumberGuess />
    </div>
    <div className='component-container' id='hooks-practice'>
      <h1>Hooks Practice</h1>
      <InputComponent />
    </div>
    <div className='component-container' id='extended-hooks-practice'>
      <h1>Extended Hooks Practice</h1>
      <RegisterForm />
    </div>
    <div className='component-container' id='reducer-example'>
      <h1>Reducer Example</h1>
      <ReducerExampleComponent />
    </div>
    {/* <div className='component-container' id='use-context-example'>
      <h1>useContext Example</h1>
      <MealsContainer />
    </div> */}
  </div>
)

export default App
