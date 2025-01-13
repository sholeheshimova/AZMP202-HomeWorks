import React, { useContext } from "react";
import { Button, Card } from "antd";
const { Meta } = Card;
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FavoritesContext } from "../../../context/FavoritesContext";

const Home = ({ products }) => {
  const { favorites, toggleFavorites, clearFavorites } =
    useContext(FavoritesContext);
  console.log(favorites);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length > 0 &&
          products.map((product) => (
            <Card
              key={product._id}
              hoverable
              style={{
                width: 220,
                margin: "10px",
              }}
              cover={<img alt={product.title} src={product.image} />}
            >
              <Meta title={product.title} description={product.description} />
              <Link to={`${product._id}`}>
                <Button>Details</Button>
              </Link>
              <Button onClick={() => toggleFavorites(product)}>
                <FaRegHeart />
                {/* <FaHeart /> */}
              </Button>
              <Button>
                <FaShoppingBasket />
              </Button>
            </Card>
          ))}
      </div>
    </>
  );
};

export default Home;
