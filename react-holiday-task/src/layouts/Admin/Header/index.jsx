import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "/src/layouts/Admin/Header/index.module.scss"


const AdminHeader = () => {
  return (
    <>
    <header>
      <div className={styles.header}>
        <h2 className={styles.adminlogo}>Selling</h2>
        <nav>
          <ul>
            <li>
              <NavLink to={"/admin"}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/admin/addproduct"}>Add Product</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default AdminHeader