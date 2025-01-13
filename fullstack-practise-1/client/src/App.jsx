
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import ClientLayout from './components/Client/ClientLayouts'
import Home from './pages/Client/Home'
import Favorites from './pages/Client/Favorites'
import Basket from './pages/Client/Basket'
import AdminLayout from './components/Admin/AdminLayouts'
import Add from './pages/Admin/Add'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Details from './pages/Client/Details'
import Dashboard from './pages/Admin/Dashboard'

const BASE_URL = "http://localhost:4000/products"

function App() {

  const [products, setProducts] = useState([]);
  // console.log(products);
  
  const getAllProducts = async() => {
    try {
      const response = await axios.get(BASE_URL)
      setProducts(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
     <Routes>
      //client
      <Route path='/' element={<ClientLayout />}>
      <Route index element={<Home products={products} />} />
      <Route path='/:id' element={<Details />} />
      <Route  path='/favorites' element={<Favorites />}/>
      <Route path='/basket'  element={<Basket />}/>
      </Route>
      //admin
      <Route path='/admin' element={<AdminLayout />}>
      <Route  index element={<Dashboard  products={products}/>}/>
      <Route  path='/admin/add' element={<Add />}/>

      </Route>

      
     </Routes>
    </>
  )
}

export default App
