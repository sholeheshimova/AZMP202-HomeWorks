import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

const BASE_URL = "http://localhost:3000/products";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setProducts(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Row gutter={[16, 16]} style={{ padding: "16px" }}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card
            key={product.id}
              hoverable
              style={{ width: "100%" }}
              cover={<img alt={product.title} src={product.image} />}
            >
              <Meta title={product.title} description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;
