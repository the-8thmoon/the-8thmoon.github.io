import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Profile from '../Profile.jsx'
import App from '../App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Profile />

    </React.StrictMode>,
)



