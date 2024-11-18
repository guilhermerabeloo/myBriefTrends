import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { AuthProvider } from '../lib/AuthContext.jsx'

import App from './App.jsx'
import Singin from '../components/Singin.jsx'
import Login from '../components/Login.jsx'
import LandingPage from '../components/landingPage.jsx'
import Home from '../components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: <Home />
      },
    ]
  },
  {
    path: '/landingpage',
    element: <LandingPage />
  },
  {
    path: '/singin',
    element: <Singin />
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)