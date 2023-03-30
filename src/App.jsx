import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Countries from './Countries'
import CountriresFuncComp from './CountriresFuncComp'
import Home from './Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/countries/:page' element={<CountriresFuncComp />} />
    </Routes>
  )
}

export default App