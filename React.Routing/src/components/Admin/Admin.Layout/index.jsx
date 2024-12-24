import React from 'react'
import Adminheader from '../../../layouts/Admin/Header'
import { Outlet } from 'react-router-dom'



const AdminLayout = () => {
  return (
    <div>
      <Adminheader />
      <Outlet />
    </div>
  )
}

export default AdminLayout
