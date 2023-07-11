import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <p>adaada</p>
    <Link to='/ver'>Ver</Link>
    <Link to='/crear'>Crear</Link>
      <Outlet/>
    </div>
  )
}
