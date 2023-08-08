import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import PropertyPage from './pages/PropertyPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />

    <Routes>
        <Route path='/'  element={<Home />}  />
        <Route path='/single-house'  element={<PropertyPage />}  />
    </Routes>


    <Footer />
    </>
  )
}

export default App
