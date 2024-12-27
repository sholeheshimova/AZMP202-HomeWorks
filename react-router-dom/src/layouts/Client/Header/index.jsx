import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'


const ClientHeader = () => {
  return (
    <>
    <header>
        <div className="container">
            <div className={styles.header}>
                <h2 className={styles.clientlogo}>Client Logo</h2>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"blog"}>Blog</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={"blogdetail"}>Blog Detail</NavLink>
                        </li> */}
                        <li>
                            <NavLink to={"contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"login"}>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to={"register"}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to={"favorites"}>Favorites</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    </>
  )
}

export default ClientHeader