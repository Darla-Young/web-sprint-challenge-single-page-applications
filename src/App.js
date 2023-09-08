import React, {useState, useEffect} from "react";
import {Link, Route, Routes} from 'react-router-dom';
import Form from "./Components/Form";

const App = () => {
  return (
    <>
      <Link id="order-pizza" to='/'>Order</Link> {/*links to form*/}
      <h1>Lambda Eats</h1>
      
      <Routes>
        <Route path='/' element={<Form />} />
      </Routes>
    </>
  );
};
export default App;
