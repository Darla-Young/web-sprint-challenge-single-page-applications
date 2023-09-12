import React, {useState, useEffect} from "react"
import {Route, Routes} from 'react-router-dom'
import Home from "./Components/Home"
import Form from "./Components/Form"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' id="pizza-form" element={<Form />} />
      </Routes>
    </>
  )
}
export default App;
