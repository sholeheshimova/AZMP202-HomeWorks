import React from 'react'
import styles from '../Footer/index.module.scss'
import { Col, Row } from 'antd'

const Footer = () => {
  return (
  <>
  <footer>
  <Row>
      <Col span={6}>
      <h3>Category</h3>
      <p>Male</p>
      <p>Female</p>
      <p>Shoes</p>
      <p>Fashion</p>
      </Col>
      <Col span={6}>
      <h3>Company</h3>
      <p>About</p>
      <p>News</p>
      <p>FAQ</p>
      <p>Contact</p>
      </Col>
      <Col span={6}>
      <h3>Address</h3>
      <p>200, Green block, NewYork</p>
      <p>
      +10 456 267 1678</p>
      <p>contact89@winter.com</p>
     
        </Col>
      <Col span={6}>
      <h3>NewsLetter</h3>
      <input type="email" placeholder='enter your email' />
      </Col>
    </Row>
  </footer>
  </>
  )
}

export default Footer