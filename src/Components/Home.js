import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(props) {
    const navigate = useNavigate()

    return (
        <button id="order-pizza" onClick={() => navigate('/pizza')} >Order</button>
    )
}