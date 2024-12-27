import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../Blog/index.module.scss'

const BlogDetail = () => {
  const [cards, setCards] = useState([]);

  const {id} = useParams()
  const [product , setProduct] = useState()

  const getProduct = async () => {
    const response = await axios (`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data)
  }
  const filtered = cards.filter((blog) => 
  blog.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  useEffect(() => {
    getProduct()
  }, [])
  return (
    <>
     <div className={styles.cardholder}  >
     {product && (
      <>
      <div className={styles.card} >
      <img src={product.image} alt="" style={{ width: 100, height: 100 }} />
         <h1 style={{ fontSize: 20 }}>{product.title}</h1>
      <p  style={{ padding: 20 }}>{product.category}</p>
      <p style={{ color: "red" }}>Price: {product.price}</p>
      </div>
      </>
   
     )}
    </div>
    </>
  )
}

export default BlogDetail