import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'antd';
import axios from 'axios'
import styles from './index.module.scss'

const Blog = () => {

  // const [query, setQuery] = useState('')
  const [filteredCards, setFilteredCards] = useState([])
  const [cards, setCards] = useState();
  const searchInput = useRef(null)
  const getCards = async() => {
    const data = await axios("https://fakestoreapi.com/products");
    setCards(data.data)
  }
  useEffect(() => {
    getCards()
  },[])

  function handleSearch(e){
    e.preventDefault();
    
    const searchValue = searchInput.current.value.toLowerCase()
    
    const filtered = cards.filter((blog) => 
    blog.title.toLowerCase().includes(searchValue)
    );
    setFilteredCards(filtered)
  }
   return (
    <>
<form action="">
  <input type="text"  ref={searchInput} onChange={handleSearch} className={styles.search} placeholder='search..'/>
</form>

    <div className={styles.cardholder} >
      {filteredCards.map((item) =>(
        <div key={item.id} className={styles.card} style={{width: 300, height:200}}>
          <h1 style={{fontSize: 20}}>{item.title}</h1>
          <p style={{padding: 20}}>{item.category}</p>
          <p style={{color: "red"}}>Price: {item.price}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Blog