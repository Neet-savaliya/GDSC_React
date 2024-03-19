
import './App.css'
import Register from './screens/Register';
import { Signin } from './screens/Signin';
import Home from './screens/Home';
import Profile from './screens/Profile'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='flex justify-center'>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
