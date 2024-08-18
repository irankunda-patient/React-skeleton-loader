import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'

const App = () => {
  return (
    <div className='text-center py-5 bg-slate-800 h-[100vh] flex flex-col items-center justify-center font-montserrat'>
        <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
