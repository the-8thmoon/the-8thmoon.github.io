import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './Body.jsx'
import './index.css'
import Profile from './Profile.jsx'
import Elements from './Elements.jsx'
import NavBar from './NavBar.jsx'

ReactDOM.createRoot(document.getElementById('navigation')).render(
    <React.StrictMode>
        <NavBar />
        <Body />
    </React.StrictMode>, 
)

//npm run dev


