import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


export type ShopItemProps = {
    item:{
    id:number,
    name:string,
    price:number,
    imgUrl:string
    }
}

export const ShopItem = ({item}:ShopItemProps) => {
    const {getTotalItemById,addItem,removeItem,removeAllItem} = useContext(ShopContext);
    return(
        <>
        <div>
        <div className="overflow-hidden h-[360px]">
            <img src={item.imgUrl} height={360}/>
        </div>
        {getTotalItemById(item.id)===0?<button className="bg-blue-600 text-white px-4 py-2 w-full mt-2 rounded-lg" onClick={()=>addItem(item.id)}>Add To cart</button>:<div className="space-y-5 flex flex-col mt-3"><div className="flex items-center justify-center space-x-3"><button className="bg-blue-800 text-white px-2 py-1 cursor-pointer" onClick={()=>removeItem(item.id)}>-</button><span>{getTotalItemById(item.id)} in cart</span><button className="bg-blue-800 text-white px-2 py-1 cursor-pointer" onClick={()=>addItem(item.id)}>+</button></div><div className="flex items-center justify-center space-x-3"><button className="bg-red-800 text-white px-2 py-1 cursor-pointer" onClick={()=>removeAllItem(item.id)}>Remove</button></div></div>}
        </div>
        </>
    )
}