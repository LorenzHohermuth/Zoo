import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>    
  )
}

export default App
