import React from 'react'
import { Routes,Route, useParams } from 'react-router-dom'
import Countries from './Countries'

function App() {

  return (
    <Routes>
      <Route path='/countries' element={<Countries />} />
    </Routes>
  )
}

export default App