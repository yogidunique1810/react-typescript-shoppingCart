import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'
import { ShopContextProvoider } from './context/ShopContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ShopContextProvoider>
    <App />
    </ShopContextProvoider>
    </BrowserRouter>
  </StrictMode>,
)
