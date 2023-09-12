import React, {useState} from "react"
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Components/Home"
import Form from "./Components/Form"

const App = () => {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' id="pizza-form" element={<Form />} />
      </Routes>
    </>
  )
}
export default App;
