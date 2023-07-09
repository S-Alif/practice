import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// import custom css
import './css/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
