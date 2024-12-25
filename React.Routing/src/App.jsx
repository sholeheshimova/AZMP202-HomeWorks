
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/Client/Client.Layout'
import Home from './pages/Client/Home'
import Contact from './pages/Client/Contact'
import ClientProducts from './pages/Client/Products'
import AdminLayout from './components/Admin/Admin.Layout'
import Users from './pages/Admin/Users'
import Dashboard from './pages/Admin/Dashboard'
import AdminProducts from './pages/Admin/Products'

function App() {


  return (
    <>
      <Routes>
        //client
        <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/client/products" element={<ClientProducts />}/>

        </Route>
        //admin
        <Route path="/admin" element={<AdminLayout />}/>
        <Route index element={<Dashboard />}/>
        <Route path="/users" element={<Users />} />
        <Route path="/admin/products" element={<AdminProducts />}/>
      </Routes>
    </>
  )
}

export default App
