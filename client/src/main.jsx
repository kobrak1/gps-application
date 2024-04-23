import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainProvider } from './context/MainProvider.jsx'
import { ThemeProvider } from './context/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
