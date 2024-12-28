import React, { useContext } from 'react'
import { Card, Col, Row } from 'antd';
import { FavoritesContext } from '../../../context/FavoritesContext'
import { FaHeart } from "react-icons/fa6";
const { Meta } = Card;
import {Link} from "react-router-dom"
import { FaRegHeart } from "react-icons/fa6";

const Favorites = () => {
    const {favorites, toggleFavorites} = useContext(FavoritesContext)

  return (
    <>
    <Row gutter={16}>
    {favorites.length > 0 && favorites.map((product)=>{
      return <Col className="gutter-row" span={6} key={product.id}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={product.title} src={product.image} />}
      >
       
        <Meta title={<Link to={`${p.id}`}>{product.title}</Link>} description={<div>

         <p>Price: $ {product.price}</p>
         <p>{product.description.slice(0,50)}</p>
         <span>
          
             <FaHeart onClick={()=>toggleFavorites(product)}/>
           

         </span>
        </div>} />
      </Card>
    </Col>
    })}
    </Row>
    </>
  )
}

export default Favorites