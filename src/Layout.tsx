import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ShopContext } from "./context/ShopContext"
import { GiShoppingCart } from "react-icons/gi";


export const Layout = () => {
  const {getTotalQuantity} = useContext(ShopContext);
  
  return (
    <>
    <div className="w-[1200px] m-auto">
    <nav className="flex justify-between items-center my-10 bg-cyan-600 p-6">
        <ul className="flex space-x-4 cursor-pointer">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
        </ul>
        <div>
            <Link to='/cart'><div className="text-4xl"><div className="relative text-red-800 font-bold"><GiShoppingCart /><div className="absolute top-0 right-0 text-white"><sub>{getTotalQuantity()>0?getTotalQuantity():''}</sub></div></div></div></Link>
        </div>
    </nav>
    <Outlet/>
    </div>
    </>
  )
}

export default Layout