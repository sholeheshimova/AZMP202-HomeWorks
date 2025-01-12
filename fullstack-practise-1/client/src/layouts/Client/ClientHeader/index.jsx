import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "../ClientHeader/index.module.scss"

const ClientHeader = () => {
  return (
    <>
    <header>
        <div className={styled.header}>
            <div className={styled.clientlogo}>
                <h2>Client Logo</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/favorites"}>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/basket"}>Basket</NavLink>
                    </li>
                    </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default ClientHeader