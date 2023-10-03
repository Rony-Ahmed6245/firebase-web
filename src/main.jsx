import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import './index.css'
import mycreateRouter from './Router/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={mycreateRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
