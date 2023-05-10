import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage } from './components/HomePage.jsx'
import { CifradoBase } from './pages/CifradoBase.jsx'
import { CifradoAes } from './pages/CifradoAes.jsx'

const router = createBrowserRouter([
  {
    path: '/*',
    element: <HomePage />,
  },
  {
    path: '/base64',
    element: <CifradoBase />,
  },
  {
    path: '/aes',
    element: <CifradoAes />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HomePage /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
