import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import CrearProfesor from './pages/CrearProfesor'
import VerProfesor from './pages/VerProfesor'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/crear',
        element: <CrearProfesor/>
      },

      {
        path:'/ver',
        element: <VerProfesor/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
