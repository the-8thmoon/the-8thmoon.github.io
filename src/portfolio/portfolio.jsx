import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Profile from '../Profile.jsx'
import Body from '../Body.jsx'
import Elements from '../Elements.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Body />
        <Profile />
        <Elements/>

    </React.StrictMode>,
)



