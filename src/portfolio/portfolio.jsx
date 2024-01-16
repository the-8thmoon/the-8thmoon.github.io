import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Profile from '../Profile.jsx'
import App from '../App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Profile />
        <Profile />
        <Profile />
        <a href="#tab1">Tab 1</a>
<a href="#tab2">Tab 2</a>

<a id="tab1"></a>
<a id="tab2"></a>

<div class="tab tab1 default-tab">Some content</div>
<div class="tab tab2">Some other content</div>
        <Profile />
        <Profile />
        <Profile />

    </React.StrictMode>,
)



