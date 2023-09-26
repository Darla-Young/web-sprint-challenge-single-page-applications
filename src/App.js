import React, {useState} from "react"
import {Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Components/Home"
import Form from "./Components/Form"
import Success from "./Components/Success"

const blankform = {
  name: '',
  size: '',
  toppings: '',
  special: ''
}

const App = () => {
  const [form, setForm] = useState(blankform)
  const [errors, setErrors] = useState(blankform)
  const [disabled, setDisabled] = useState(true)

  const setState = (obj) => {setForm(obj)}
  const setErr = (msg) => {setErrors(msg)}
  const setDis = (bool) => {setDisabled(bool)}

  return (
    <>
      <Header id="header" />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route 
          path='/pizza' 
          element={<Form
            id="pizza-form" 
            state={form}
            setState={setState}
            errors={errors}
            setErrors={setErr}
            disabled={disabled}
            setDisabled={setDis}
          />} 
        />
        <Route 
          path='/confirmation' 
          element={<Success
            id="success" 
            state={form}
          />} 
        />
      </Routes>
    </>
  )
}
export default App;
