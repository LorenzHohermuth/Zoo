import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Animals from './pages/Animals'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AnimalPage from './components/AnimalPage'

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='animals' element={<Animals/>}/>
        <Route path='animals/panda' element={<AnimalPage/>}/>
      </Routes>
      <Footer/>
    </div>    
  )
}

export default App
