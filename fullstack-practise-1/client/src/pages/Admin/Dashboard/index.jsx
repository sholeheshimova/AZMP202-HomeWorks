import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Space, Table, Tag } from 'antd';
import { FavoritesContext } from '../../../context/FavoritesContext'

const BASE_URL = "http://localhost:4000/products"

const Dashboard = ({ products }) => {
    const {favorites, toggleFavorites, clearFavorites} = useContext(FavoritesContext)
  const [product, setProduct] = useState([]) // Başlanğıcda boş array olaraq təyin edirik

  const getAllProducts = async () => {
    try {
      const response = await axios.get(BASE_URL)
      setProduct(response.data || []) // Məlumat yoxdursa, boş array təyin edilir
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const columns = [
    {
        title: 'Image',
        dataIndex: 'image', // Data sahəsi adını yoxlayırıq
        key: 'image',
        render: (image) => (
          <img
            src={image}
            alt="Product"
            style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '5px' }}
          />
        ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button >Edit</Button>
          <Button onClick={clearFavorites()}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={product} 
      rowKey={(record) => record._id || record.id} 
    />
  );
}

export default Dashboard;
