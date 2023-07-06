import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
