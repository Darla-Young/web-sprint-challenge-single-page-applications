import React from "react"
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Components/Home"
import Form from "./Components/Form"

const App = () => {

  return (
    <>
      <Header id="header" />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<Form />} id="pizza-form" />
      </Routes>
    </>
  )
}
export default App;
