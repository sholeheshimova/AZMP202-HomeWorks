import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import styles from './index.module.scss'

const Blog = () => {

  // const [query, setQuery] = useState('')
  const [cards, setCards] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getCards = async() => {
    const data = await axios("https://fakestoreapi.com/products");
    setCards(data.data)
    console.log(data.data)
  }

  useEffect(() => {
    getCards()
  },[])

  const filtered = cards.filter((blog) => 
  blog.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value.trim())
  }


   return (
    <>
<form action="">
  <input type="text" onChange={handleSearch} className={styles.search} placeholder='search..'/>
</form>

    <div className={styles.cardholder} >
      {filtered.map((item) =>(
        <div key={item.id} className={styles.card} style={{width: 300, height:300}}>
          <img src={item.image} alt="" style={{width: 100, height: 100}}/>
          <h1 style={{fontSize: 20}}>{item.title}</h1>
          <p style={{padding: 20}}>{item.category}</p>
          <p style={{color: "red"}}>Price: {item.price}</p>
          <button>Details</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Blog