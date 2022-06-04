import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BoxProvider } from './context/Rahul'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BoxProvider>
    <App />
    </BoxProvider>
    
  </React.StrictMode>
)
