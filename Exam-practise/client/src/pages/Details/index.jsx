import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Row } from 'antd';


const BASE_URL = "http://localhost:4000/winters"
const Details = () => {
  const {id} = useParams()
  const [winters, setWinters] = useState([])

  const getAllWinters = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`)
      setWinters(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllWinters()
  }, [])
  return (
    <>
   
   <Row>
    <div>
      {winters && (
        <div style={{display: "flex",marginTop: "100px", marginLeft: "400px"}}>
          <Col span={6} key={winters._id}>
          <img src={winters.image} alt="" width={160}/></Col>
          <Col span={6} key={winters._id}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem rem sint dignissimos numquam incidunt eius hic molestiae perspiciatis placeat provident nihil non nostrum dolore sunt consequatur saepe, repellendus voluptas, expedita adipisci nobis! Consequuntur, atque et earum temporibus voluptates veniam minus.</p>
          </Col>
        </div>
      )}
    </div>
   </Row>
    
    </>
  )
}

export default Details