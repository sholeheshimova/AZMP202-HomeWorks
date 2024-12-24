import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'

const Adminheader = () => {
  return (
    <div>
      <header>
        <div className="container">
            <div className={styles.header}>
                <h2 className={styles.adminlogo}>Admin Logo</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink>Products</NavLink>
                        </li>
                        <li>
                            <NavLink>Users</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Adminheader
