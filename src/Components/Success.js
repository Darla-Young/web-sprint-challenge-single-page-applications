import React from "react"
import pizza from "../Assets/Pizza.jpg"

export default function Success (props) {
    const {state} = props
    const list = (toppings) => {
        for(let i=0; i<toppings.length; i++){
            <p id={i} className="order toppings">{i}</p>
        }
    }

    return (
        <div id="success">
            <h1>Success! Pizza is on the way!</h1>
            <img id="pizzaImg" src={pizza} alt="Delicious pizza" />
            <div id="order">
                <h2>--Order details--</h2>
                <p id="name" className="order">Name: {state.name}</p>
                <p id="size" className="order">Size: {state.size}</p>
                <p id="toppings" className="order">Toppings: {state.toppings}</p>
                {list(state.toppings)}
                <p id="special" className="order">Special Instructions: {state.special}</p>
            </div>
        </div>
    )
}