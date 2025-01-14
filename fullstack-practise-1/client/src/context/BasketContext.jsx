import React, { createContext, useContext, useState } from 'react'

export const BasketContext = createContext(null)
const BasketProvider = ({children}) => {
    const [basket, setBasket] = useState([])

    const addToBasket =(product) => {
        const idx = basket.findIndex((q) => q._id === product._id)

        if (idx === -1) {
            setBasket([...basket, {...product, quantity: 1}])
        }else{
            basket[idx].quantity++;
            setBasket([...basket])
        }
        console.log(basket);
        
    }
    const removeBasketItem =(product) => {
        setBasket((basket) => basket.filter((q)=> q._id !== product._id))
    }
    const increaseBasket =(product) => {
        setBasket((basket)=> {
            const found = basket.find((q) => q._id === product._id)
            found.quantity++;
            return[ ...basket]
        })
    }
    const decreaseBasket =(product) => {
        setBasket((basket)=> {
            const found = basket.find((q) => q._id === product._id)
            found.quantity--;
            if (found.quantity === 0) {
                return basket.filter((q) => q._id !== product._id)
            }
            return[ ...basket]
        })
    }
    const clearBasket =() => {
        setBasket([])
    }
  return (
    <BasketContext.Provider value={{basket,addToBasket, removeBasketItem,increaseBasket,decreaseBasket,clearBasket}}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider