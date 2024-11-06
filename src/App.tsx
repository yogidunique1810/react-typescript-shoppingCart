
import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { About } from './pages/About'
import Layout from './Layout'
import { NoPageFound } from './pages/NoPageFound'
import { Cart } from './pages/Cart'
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NoPageFound/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
