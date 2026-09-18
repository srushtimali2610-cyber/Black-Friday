import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Shop from './components/Shop'
import Detail from './components/Detail'
import About from './components/About'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
