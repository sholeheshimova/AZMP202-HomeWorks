import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const BASE_URL = "http://localhost:3000/products";

import { Card } from "antd";

const { Meta } = Card;



const Details = () => {

  const [products, setProducts] = useState()

  const {id} = useParams()

  const getProduct = async() => {
    try {
      const {data} = await axios(BASE_URL/{id})
      setProducts(data)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() =>{
    getProduct()
  }, [])
  return (
    <>
    <div style={{ padding: "16px" }}>
      {products && (
        <>
        <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt={products.title} src={products.image} />}
      >
        <Meta title={products.title} description={products.description} />
        <p>{products.details}</p>
      </Card>
        </>
      )}
      
    </div>
    </>
  )
}

export default Details