import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Countries from './Countries'
import CountriresFuncComp from './CountriresFuncComp'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Countries />} />
      <Route path='/countries/:page' element={<CountriresFuncComp />} />
    </Routes>
  )
}

export default App