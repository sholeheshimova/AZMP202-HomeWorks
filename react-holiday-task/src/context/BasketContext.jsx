import React, { createContext, useContext } from 'react'
import { useState } from 'react'


 export const BasketContext = createContext(null)
const BasketProvider = ({children}) => {
 const [basket, setBasket] = useState([])

 const addToBasket = (product) => {
    const idx = basket.findIndex((q) => q.id === product.id)

    if (idx === -1) {
        setBasket([...basket, {...product, quantity: 1}])
    }else{
        basket[idx].quantity++
        setBasket([...basket])
    }
    
    
 }
 const removeBasketItem = (product) => {
    setBasket((prevBasket) => prevBasket.filter((q)=> q.id !== product.id))
 }
 const increaseBasketCount = (product) => {
    setBasket((prevBasket) => {
        const found = prevBasket.find((q) => q.id === product.id)
        found.quantity++
        return [...prevBasket]
    })
 }
 const decreaseBasketCount = (product) => {
    setBasket((prevBasket) => {
        const found = prevBasket.find((q) => q.id === product.id)
        found.quantity--
        return [...prevBasket]
    })
 }
 const clearBasket = () => {
    setBasket([])
 }
  return (
    <BasketContext.Provider value={{basket, addToBasket , removeBasketItem, increaseBasketCount,decreaseBasketCount,clearBasket}} >{children}</BasketContext.Provider>
  )
}

export default BasketProvider