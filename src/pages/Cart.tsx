import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { CartItem } from "../components/CartItem"

export const Cart = () => {
    const {getTotalQuantity,items,getTotalAmount} = useContext(ShopContext)
    
    if(getTotalQuantity()===0){
        return <h3>No item is selected</h3>
    }
    else{
        let div= items.map((item)=>(
            <CartItem key={item.id} itemData={item}/>
        ))

        return (<div className="w-[600px] mx-auto"><div className="flex flex-col space-y-[60px]">{div}
        
        </div><div className="flex justify-end font-bold pr-[20px] bg-green-500 text-white px-3 py-3 mt-5">Total amount : {getTotalAmount()}</div></div>)
        
        
    }
    return(
        <>
            <h3>Cart</h3>
        </>
    )
}