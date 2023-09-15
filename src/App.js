import React from "react"
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Components/Home"
import Form from "./Components/Form"
import onChange from './Handlers/OnChange'
import onSubmit from './Handlers/OnSubmit'
// import validation from './Handlers/Validation' /* <p> {item} error message goes here </p> */

const App = () => {
  // const validate = (item) => {validation(item)}

  return (
    <>
      <Header id="header" />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<Form />} 
          id="pizza-form" 
          onChange={onChange}
          onSubmit={onSubmit}
          // validate={validate}
        />
      </Routes>
    </>
  )
}
export default App;
