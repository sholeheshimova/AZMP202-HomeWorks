import './App.css'
import { Route, Routes } from "react-router-dom"
import ClientLayout from './components/Client/ClientLayout'
import Home from './pages/Client/Home'
import Basket from './pages/Client/Basket'
import Details from './pages/Client/Details'
import Favorites from './pages/Client/Favorites'
import Dashboard from './pages/Admin/Dashboard'
import Products from './pages/Admin/Products'
import AddProduct from './pages/Admin/AddProduct'
import AdminLayout from './components/Admin/AdminLayout'



function App() {
 

  return (
    <>
     <Routes >
      //client
<Route path='/' element={<ClientLayout />} >
<Route  index element={<Home />}/>
<Route path='/basket' element={<Basket />}/>
<Route path='/details/:id' element={<Details />} />
<Route  path='/favorites' element={<Favorites />}/>
</Route>
//admin

<Route path='/admin' element={<AdminLayout />}>
<Route index element={<Dashboard />} />
<Route path='/admin/products' element={<Products />}/>
<Route path='/admin/addproduct' element={<AddProduct />}/>

</Route>

     </Routes>
    </>
  )
}

export default App
