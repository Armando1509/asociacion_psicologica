import { Route, Routes } from 'react-router'

import './App.css'
import Landing from './components/Landing'
import AcercaNosotros from './components/AcercaNosotros'

function App() {
  

  return (
   
    <Routes>

      <Route path='/' element={<Landing/>} />
      <Route path='/acercaNosotros' element={<AcercaNosotros/>}/>

    </Routes>
  )
}

export default App
