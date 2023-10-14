import { Routes, Route, Link } from 'react-router-dom'

import BasicListComponent from './Course/Week1/02_CreateBasicListComponent/02_CreateBasicListComponent'
import Homepage from './Extras/Pages/Homepage'
import TransformingLists from './Course/Week1/01_TransformingLists'
import UsingKeys from './Course/Week1/03_UsingKeys/UsingKeys'

import './App.css'

function App () {
  return (
    <div className='App'>
      <nav className='nav'>
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/week1/01_transforming_lists' className='nav-item'>01. Transforming Lists</Link>
        <Link to='/week1/02_create_basic_list_component' className='nav-item'>02. Create Basic List Component</Link>
        <Link to='/week1/03_using_keys' className='nav-item'>03. Using Keys</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/week1/01_transforming_lists' element={<TransformingLists />} />
        <Route path='/week1/02_create_basic_list_component' element={<BasicListComponent />} />
        <Route path='/week1/03_using_keys' element={<UsingKeys />} />
      </Routes>
    </div>
  )
}

export default App
