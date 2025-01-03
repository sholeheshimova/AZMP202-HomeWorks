import React from 'react'
import ClientHedaer from '../../../layouts/Client/Header'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
    <ClientHedaer />
    <Outlet />
    </>
  )
}

export default ClientLayout