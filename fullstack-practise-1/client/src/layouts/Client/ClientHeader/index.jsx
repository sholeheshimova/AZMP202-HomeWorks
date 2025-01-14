import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from "../ClientHeader/index.module.scss"
import { FavoritesContext } from "../../../context/FavoritesContext";
import { BasketContext } from '../../../context/BasketContext';

const ClientHeader = () => {
 const { favorites, toggleFavorites, clearFavorites } =
    useContext(FavoritesContext);
    const {basket} = useContext(BasketContext)
   
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
                        <NavLink to={"/favorites"}>Favorites <sup>{favorites.length}</sup></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/basket"}>Basket <sup>{basket.length}</sup></NavLink>
                    </li>
                    </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default ClientHeader