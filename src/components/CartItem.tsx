import items from './../data/item.json'
import { cartItem } from '../context/ShopContext'
import { CiCircleRemove } from "react-icons/ci";
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"


type CartItemProps={
    itemData:cartItem
}
export const CartItem=({itemData}:CartItemProps)=>{
    const {removeAllItem} = useContext(ShopContext)
    const findItem = items.filter((item)=>item.id==itemData.id)[0]
    console.log(findItem);
    return(
        <>
        <div className='flex justify-between'>
        <div className="flex items-center space-x-[60px]">
            <div className="w-[220px] h-[120px] overflow-hidden">
                <img src={findItem.imgUrl}/>
            </div>
            <div className="flex flex-col space-y-5">
                <span>{findItem.name} - {itemData.quantity}</span>
                <span>{findItem.price}</span>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <div>
                <span>{itemData.quantity * findItem.price}</span>
            </div>
            <div>
                <span className='text-3xl text-black font-bold cursor-pointer'><CiCircleRemove onClick={()=>removeAllItem(itemData.id)}/></span>
            </div>
        </div>
        </div>

        </>
    )
}