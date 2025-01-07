import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import { UserController } from './context/UsersContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserController>
      <Router />
    </UserController>
  </BrowserRouter>,
)