import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();
const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorites = (product) => {
    const found = favorites.find((p) => p._id == product._id);
    if (found) {
      setFavorites((prev) => prev.filter((q) => q._id !== product._id));
    } else {
      setFavorites((prev) => [...prev, product]);
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorites, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
