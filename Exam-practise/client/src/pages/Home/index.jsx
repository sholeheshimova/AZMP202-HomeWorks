import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'antd';
import {Link} from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { useContext } from 'react';
import styles from '../Home/index.module.scss'
import { FavoritesContext } from '../../context/FavoritesContext';
import { CiCreditCard2 } from "react-icons/ci";



const BASE_URL = "http://localhost:4000/winters"
const Home = () => {
  const [winters, setWinters] = useState([])
  const [wintersCopy, setWintersCopy] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  const {winter, toggleFavorites} = useContext(FavoritesContext)

  const getAllWinters = async() => {
    try {
      const response = await axios.get(`${BASE_URL}`)
      setWinters(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  const filteredWinter = winters.filter((f) => f.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

  const handleChange = (e) => {
    let sortedWinter = null
    if (e.target.value === "asc") {
      sortedWinter = [...winters].toSorted((a,b) => a.price - b.price)
    }else if (e.target.value === "desc") {
      sortedWinter =[...winters].toSorted((a,b) => b.price - a.price)
    }else{
      sortedWinter = [...wintersCopy]
    }
    setWinters([...sortedWinter])
    }

  useEffect(() => {
    getAllWinters()
  }, [])
  return (
    <>
    <div className={styles.sec1}>
      <h1>Fashion Collection 2019</h1>
      <button>Shop Now</button>
    </div>
    <div className={styles.sec2}>
       <div className={styles.cards}>
       <Row>
        <Col span={8} style={{display: "flex", flexDirection: "column"}}>
        <img src="https://preview.colorlib.com/theme/winter/img/feature_1.png" alt="" width={200} />
          <button style={{width: "200px"}}>Shop Now</button>
        </Col>
        <Col span={8} style={{display: "flex", flexDirection: "column"}}>
        <img src="https://preview.colorlib.com/theme/winter/img/feature_2.png" alt="" width={200} />
          <button  style={{width: "200px"}}>Shop Now</button>
        </Col>
        <Col span={8} style={{display: "flex", flexDirection: "column"}}>
        <img src="https://preview.colorlib.com/theme/winter/img/feature_3.png" alt="" width={200} />
          <button  style={{width: "200px"}}>Shop Now</button>
        </Col>
       </Row>

       </div>
    </div>
    <div className={styles.sec3}>
      <h1>New Arriwal</h1>
      <input type="search" onChange={(e) => {setSearchQuery(e.target.value)}} />
      <select name="" id="" onChange={handleChange}>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
        <option value="default">Default</option>
      </select>
    <Row  style={{display: 'flex', justifyContent: "space-around", marginTop: "100px"}}>
      {winters.length > 0 && filteredWinter.map((w) => {
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
    <div className={styles.sec4}>
      <div className={styles.cards}>
      <Row>
      
      <Col span={6}>
      <CiCreditCard2 />
      <h2>Free shipping</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magni, omnis tenetur laborum quae quia nostrum minima exercitationem sapiente mollitia?</p>
      </Col>
      <Col span={6}>
      <CiCreditCard2 />
      <h2>Free shipping</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magni, omnis tenetur laborum quae quia nostrum minima exercitationem sapiente mollitia?</p>
      </Col>
      <Col span={6}>
      <CiCreditCard2 />
      <h2>Free shipping</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magni, omnis tenetur laborum quae quia nostrum minima exercitationem sapiente mollitia?</p>
      </Col>
      <Col span={6}>
      <CiCreditCard2 />
      <h2>Free shipping</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magni, omnis tenetur laborum quae quia nostrum minima exercitationem sapiente mollitia?</p>
      </Col>

     
    </Row>
      </div>
    </div>
    </>
  )
}

export default Home