import React from 'react'
import ClientHeader from '../../../layouts/Client/Haeder'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <div>
      <ClientHeader />
      <Outlet />
    </div>
  )
}

export default ClientLayout
