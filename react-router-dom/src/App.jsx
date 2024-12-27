import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Client/Home';
import AdminLayout from './components/Admin/AdminLayout'
import NotFound from './components/NotFound'
import ClientLayout from './components/Client/ClientLayout';
import BlogDetail from './pages/Client/BlogDetail';
import AddProduct from './pages/Admin/AddProduct';
import AddUser from './pages/Admin/AddUser';
import EditProduct from './pages/Admin/EditProduct';
import EditUser from './pages/Admin/EditUser';
import About from './pages/Client/About'
import Blog from './pages/Client/Blog'
import Contact from './pages/Client/Contact'
import Login from './pages/Client/Login'
import Register from './pages/Client/Register'
import Dashboard from './pages/Admin/Dashboard'
import Products from './pages/Admin/Products'
import Users from './pages/Admin/Users'


function App() {
 

  return (
    <>
     <Routes>
      //clientlayout

      <Route path='/' element={<ClientLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/blog/:id' element={<BlogDetail />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />}/>
      <Route />

      //adminlayout
      <Route path='/admin' element={<AdminLayout />}/>
      <Route index element={<Dashboard/>} />
      <Route path='addproduct' element={<AddProduct />} />
      <Route path='adduser' element={<AddUser />} />
      <Route path='editproduct' element={<EditProduct />} />
      <Route path='edituser' element={<EditUser />} />
      <Route path='products' element={<Products />} />
      <Route path='users' element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
