import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "antd";
import { FaShoppingBasket } from "react-icons/fa";
import { FavoritesContext } from '../../../context/Favorites'

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BasketContext } from "../../../context/BasketContext";

const { Meta } = Card;

const BASE_URL = "http://localhost:3000/products";

const Home = () => {

  const [products, setProducts] = useState([]);
  const { toggleFavorites, favorites } = useContext(FavoritesContext);
  const {addToBasket} = useContext(BasketContext)

  const getAllProducts = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setProducts(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
    
    <Row gutter={[16, 16]} style={{ padding: "16px" }}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card
            key={product.id}
              hoverable
              style={{ width: "100%" }}
              cover={<img alt={product.title} src={product.image} />}
            >
              <Meta title={product.title} description={product.description} />
              <br />
              <Button onClick={() => {addToBasket(product)}}>
              <FaShoppingBasket />
              </Button>
              <Button
                      type="text"
                      onClick={() => toggleFavorites(product)}
                      style={{ color: favorites.find((q) => q.id === product.id) ? "#ff4d4f" : "#8c8c8c" }}
                    >
                      {favorites.find((q) => q.id === product.id) ? <FaHeart /> : <FaRegHeart />}
                    </Button>
              <Link to={`/details/${product.id}`}>
              <Button>Details</Button>
            </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home