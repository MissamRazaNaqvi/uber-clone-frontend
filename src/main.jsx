import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-center" reverseOrder={false} gutter={10} toastOptions={{ duration: 3000 }} />
    </BrowserRouter>,
  </StrictMode>,
)
