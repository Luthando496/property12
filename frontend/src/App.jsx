import { useState,useEffect } from 'react'
// import Swiper bundle with all modules installed
import 'swiper/css';
// import styles bundle
import 'swiper/css/bundle';
// npm install slick-carousel

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// 
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import PropertyPage from './pages/PropertyPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About';
import Results from './pages/Results';
import Contact from './pages/Contact';
import {useDispatch,useSelector} from 'react-redux'
import { fetchAllHouses } from './store/actions/houseActions';



function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar />

    <Routes>
        <Route path='/'  element={<Home />}  />
        <Route path='/about-us'  element={<About />}  />
        <Route path='/contact'  element={<Contact />}  />
        <Route path='/search/'  element={<Results />}  />
        <Route path='/single-house/:id'  element={<PropertyPage />}  />
    </Routes>


    <Footer />
    </>
  )
}

export default App
