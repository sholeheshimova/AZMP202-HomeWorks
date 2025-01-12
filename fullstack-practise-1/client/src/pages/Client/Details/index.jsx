import { Card } from 'antd'
const { Meta } = Card;
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
const BASE_URL = "http://localhost:4000/products"

const Details = () => {

    const [products, setProducts] = useState()
    const {id} = useParams()
    console.log(id);
    

    const getProduct = async() => {
        try {
            const data = await axios(`${BASE_URL}/${id}`)
            // console.log(data);
            
            setProducts(data.data)
        } catch (error) {
            console.log(error);
            
        }
    }

useEffect(() => {
    getProduct()
}, [])
  return (
    <>
    <div>
        {products && (
            <Card
            key={products._id}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt={products.title} src={products.image} />}
          >
            <Meta title={products.title} description={products.description} />
          </Card>
        )}
    </div>
    </>
  )
}

export default Details