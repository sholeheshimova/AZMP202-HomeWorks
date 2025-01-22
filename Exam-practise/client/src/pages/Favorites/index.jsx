import React, { useContext, useState } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";


const BASE_URL = "http://localhost:4000/winters"
const Favorites = () => {

  // const [winter, setWinter] = useState([])

  const {winter, toggleFavorites} = useContext(FavoritesContext)
  console.log(winter);
  
  return (
    <>
    <div>
    <Row  style={{display: 'flex', justifyContent: "space-around", marginTop: "100px"}}>
      {winter.length > 0 && winter.map((w) => {
        return (
        <div>
            <Col span={6}>
            <img src={w.image} alt="" width={180} height={200} />
            <h3>{w.title}</h3>
            <p><span>Price: ${w.price}</span></p>
            <div style={{display: "flex", gap: "2rem"}}>
            <Link to={`/winters/${w._id}`}><button style={{width: "100px", height: "20px", backgroundColor: "lightblue", border: "none", borderRadius: "5px"}}>Details</button></Link>
            <button style={{backgroundColor: "white", border: "none", fontSize: "20px"}} onClick={() => {toggleFavorites(w)}}><FaRegHeart /></button>
            </div>
          </Col>
        </div>
        )
      })}
      </Row>
    </div>
    </>
  )
}

export default Favorites