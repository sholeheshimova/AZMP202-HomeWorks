import React from 'react'
import AdminHeader from '../../../layouts/Admin/AdminHeader'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <AdminHeader />
    <Outlet />
    </>
  )
}

export default AdminLayout