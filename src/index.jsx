import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import { BrowserRouter } from 'react-router-dom'
import 'aos/dist/aos.css';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />

  </BrowserRouter>
)
