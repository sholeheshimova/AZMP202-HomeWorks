import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Card } from 'antd';
import axios from 'axios'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom';
import { FavoritesContext } from '../../../context/FavoritesContext';
import { FaHeart } from "react-icons/fa";

import { FaRegHeart } from "react-icons/fa";



const Blog = () => {

  // const [query, setQuery] = useState('')
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const { toggleFavorites , favorites} = useContext(FavoritesContext)

  const navigate = useNavigate(null);
  const getCards = async () => {
    const data = await axios("https://fakestoreapi.com/products");
    setCards(data.data)
  }

  useEffect(() => {
    getCards()
  }, [])

  const filtered = cards.filter((blog) =>
    blog.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value.trim())
  };

  const handleDetailClick = (id) => {
    navigate(`/blog/${id}`)
  }


  return (
    <>
      <form action="">
        <input type="text" onChange={handleSearch} className={styles.search} placeholder='search..' />
      </form>

      <div className={styles.cardholder} >


        {filtered && filtered.map((item) => (
          <div key={item.id} className={styles.card} style={{ width: 300, height: 400 }}>
            <img src={item.image} alt="" style={{ width: 100, height: 100 }} />
            <h1 style={{ fontSize: 20 }}>{item.title}</h1>
            <p style={{ padding: 20 }}>{item.category}</p>
            <p style={{ color: "red" }}>Price: {item.price}</p>
            <button onClick={()=>handleDetailClick(item.id)} style={{ cursor: 'pointer' }}>Details</button>

              <Button onClick={() => toggleFavorites(product)}>{favorites.find((q) => q.id === product.id) ? <FaHeart />  : <FaRegHeart />}</Button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog