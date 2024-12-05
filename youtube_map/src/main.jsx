import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './components/sidebar.jsx'
import Navbar from './components/navbar.jsx'
import Body from './components/body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar/>
    <Navbar />
    <Body />
  </StrictMode>,
)
