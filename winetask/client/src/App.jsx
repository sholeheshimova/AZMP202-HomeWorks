
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Details from './pages/Details'
import Add from './pages/Add'
import MainLayout from './layouts/MainLayout'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home />} />
            <Route path='/favorites'  element={<Favorites  />} />
            <Route path='/add'  element={<Add  />} />
            <Route path='/:id'  element={<Details  />} />
      </Route>
            
            
    </Routes>
    </>
  )
}

export default App
