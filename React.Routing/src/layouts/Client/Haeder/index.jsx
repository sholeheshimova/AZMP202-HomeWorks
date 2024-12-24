import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'

const ClientHeader = () => {
  return (
    <div>
      <header>
        <div className="container">
            <div className={styles.header}>
                <h2 className={styles.adminlogo}>Client Logo</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink>Home</NavLink>
                        </li>
                        <li>
                            <NavLink>Products</NavLink>
                        </li>
                        <li>
                            <NavLink>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    </div>
  )
}

export default ClientHeader
