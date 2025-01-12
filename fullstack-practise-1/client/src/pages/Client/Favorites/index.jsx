import React, { useContext } from 'react'
import {FavoritesContext} from '../../../context/FavoritesContext'
import { Card } from 'antd'
const { Meta } = Card;

const Favorites = () => {

  const {favorites, toggleFavorites, clearFavorites} = useContext(FavoritesContext)
  return (
    <>
    <div>
      {favorites.length > 0 &&favorites.map((p) => (
        <Card
        key={p._id}
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={p.image} />}
      >
        <Meta title={p.title} description={p.description} />
      </Card>
      ))
         
      }
    </div>
    </>
  )
}

export default Favorites