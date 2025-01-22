import React, { createContext, useState } from 'react'


export const FavoritesContext = createContext()
const FavoritesProvider = ({children}) => {
    const [winter, setWinter] = useState([])

    const toggleFavorites = async(fav) => {
        const idx = winter.findIndex((q) => q._id === fav._id)
        if (idx === -1) {
            setWinter([...winter , fav ])
        }else{
            setWinter([...winter].filter((q) => q._id !== fav._id))
        }
    }
  return (
    
    <FavoritesContext.Provider value={{winter, toggleFavorites}}>{children}</FavoritesContext.Provider>

  )
}

export default FavoritesProvider