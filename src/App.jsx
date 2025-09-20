import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'


const App = () => {
  
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/agents' element={<Agents />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </>
  )
}

export default App
