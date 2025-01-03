import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "/src/layouts/Client/Header/index.module.scss"
import { BasketContext } from '../../../context/BasketContext'
import { FavoritesContext } from '../../../context/Favorites'

const ClientHedaer = () => {
  const {favorites} = useContext(FavoritesContext)
  const {basket} = useContext(BasketContext)
  return (
    <>
    <header className={styles.clientheader}>
      <div className={styles.header}>
        <h2 className={styles.clientlogo}>Client Page</h2>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/basket"}>Basket <sup>{basket.length}</sup></NavLink>
            </li>
            {/* <li>
              <NavLink to={"/details"}>Details</NavLink>
            </li> */}
            <li>
              <NavLink to={"/favorites"}>Favorites <sup>{favorites.length}</sup></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
    </>
  )
}

export default ClientHedaer