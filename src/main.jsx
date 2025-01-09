import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyRouter from './Router.jsx'
import { UserController } from './context/UsersContext.jsx'
import { AuthController } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserController>
      <AuthController>
        <MyRouter />
      </AuthController >
    </UserController>
  </BrowserRouter>,
)