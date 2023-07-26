import { Routes, Route, Link } from 'react-router-dom'

import Homepage from './Pages/Homepage.js'
import CardContainer from './Exercises/Card-Container/CardContainer.js'
import ContextExample from './Exercises/Context-Example/ContextExample.js'
import EventHandleExample from './Exercises/Event-Handle/EventHandleExample.js'
import HeadingPractice from './Exercises/Heading-Practice/HeadingPractice.js'
import HooksPractice from './Exercises/Hooks-Practice/HooksPractice.js'
import StateExample from './Exercises/Managing-State/StateExample.js'

import './App.css'

const App = () => (
  <div className='App'>
    <nav className='nav'>
      <Link to='/' className='nav-item'>Homepage</Link>
      <Link to='/Exercises/Heading-Practice' className='nav-item'>Heading Practice</Link>
      <Link to='/Exercises/Card-Container' className='nav-item'>Card Container</Link>
      <Link to='/Exercises/Context-Example' className='nav-item'>Context Example</Link>
      <Link to='/Exercises/Event-Handle-Example' className='nav-item'>Event Handle Example</Link>
      <Link to='/Exercises/Hooks-Practice' className='nav-item'>Hooks Practice</Link>
      <Link to='/Exercises/State-Example' className='nav-item'>Managing State</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Exercises/Heading-Practice' element={<HeadingPractice />} />
      <Route path='/Exercises/Card-Container' element={<CardContainer />} />
      <Route path='/Exercises/Context-Example' element={<ContextExample />} />
      <Route path='/Exercises/Event-Handle-Example' element={<EventHandleExample />} />
      <Route path='/Exercises/Hooks-Practice' element={<HooksPractice />} />
      <Route path='/Exercises/State-Example' element={<StateExample />} />
    </Routes>
  </div>
)

export default App
