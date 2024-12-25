import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

const AdminHeader = () => {
  return (
    <>
    <header>
        <div className="container">
            <div className={styles.header}>
                <h2 className={styles.adminlogo}>Admin Logo</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/admin"}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/addproduct"}>Add Product</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/adduser"}>Add User</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/editproduct"}>Edit Product</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/edituser"}>Edit User</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/users"}>Users</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default AdminHeader