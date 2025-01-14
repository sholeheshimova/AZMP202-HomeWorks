import React, { useContext } from 'react'
import { BasketContext } from '../../../context/BasketContext'
import { Button } from 'antd'

const Basket = () => {
  const {basket, addToBasket, removeBasketItem,increaseBasket,decreaseBasket,clearBasket} = useContext(BasketContext)
  return (
    <>
   {basket.length === 0 ? <h2>Basket bosdur</h2> : 
    <table>
    <thead>
      <th>Image</th>
      <th>Title</th>
      <th>Description</th>
      <th>Increase</th>
      <th>Quantity</th>
      <th>Decrease</th>
      <th>Remove</th>
    </thead>
    <tbody>
      {basket.map((p) => {
        return <tr key={p._id}>
          <td><img src={p.image} alt={p.title} width={100} /></td>
          <td>{p.title}</td>
          <td>{p.description}</td>
          <td><Button onClick={() => {increaseBasket(p)}}>+</Button></td>
          <td>{p.quantity}</td>
          <td><Button onClick={() => {decreaseBasket(p)}}>-</Button></td>
          <td><Button onClick={()=> {removeBasketItem(p)}}>Remove</Button></td>
        </tr>
      })}
    </tbody>
  </table>
   
   }
    </>
  )
}

export default Basket