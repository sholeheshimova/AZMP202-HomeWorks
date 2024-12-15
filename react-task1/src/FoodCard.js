import React from 'react';

const FoodCard = ({ name, description, price, image }) => {
    return (
      <div style={styles.card}>
        <img src={image} alt={name} style={styles.image} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p style={styles.price}>{price}</p>
      </div>
    );
  };

  const styles = {
    card: {
      border: "1px solid gray",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      width: "200px",
      boxShadow: "0 2px 4px gray",
      margin: "10px",
    },
    
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "5px",
      marginBottom: "15px",
    },
    price: {
      color: "red",
      fontWeight: "bold",
    },
  };

export default FoodCard;
