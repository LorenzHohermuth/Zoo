import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Animals from './pages/Animals'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='animals' element={<Animals/>}/>
      </Routes>
      <Footer/>
    </div>    
  )
}

export default App
