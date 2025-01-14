import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;

const BASE_URL = "http://localhost:4000/data";
const Home = () => {
  const [data, setData] = useState([]);

  const getDatas = async () => {
    const response = await axios.get(`${BASE_URL}`);
    setData(response.data);
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>{data.length > 0 && data.map((d) => 
    
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt={d.title} src={d.image} />}
  >
    <Meta title={d.title} description={d.description} />
  </Card>
  
  )
    
    }</>
  );
};

export default Home;
