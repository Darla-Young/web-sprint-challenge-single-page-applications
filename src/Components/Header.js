import React from "react"
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
    const navigate = useNavigate()

    return (
        <div id="header">
            <h1>Lambda Eats</h1>
            <div>
                <button id="home" onClick={() => navigate('/')} >Home</button>
                <button id="help" onClick={() => navigate('/')} >Help</button>
            </div>
        </div>
    )
}