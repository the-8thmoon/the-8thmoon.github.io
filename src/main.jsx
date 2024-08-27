import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './Profile.jsx'
import Elements from './Elements.jsx'

ReactDOM.createRoot(document.getElementById('navigation')).render(
    <React.StrictMode>
        <App />
        <Profile />
        <Elements />

    </React.StrictMode>,
)



