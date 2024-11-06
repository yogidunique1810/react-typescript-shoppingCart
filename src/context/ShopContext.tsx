import {createContext, useState } from "react";
import items from './../data/item.json'
const items2=items;
export type ShopContextProvoiderProps = {
    children:React.ReactNode
}
export type shopContextProps={
    getTotalAmount:()=>number,
    getTotalQuantity:()=>number,
    getTotalItemById:(id:number)=>number,
    addItem:(id:number)=>void,
    removeItem:(id:number)=>void,
    removeAllItem:(id:number)=>void,
    items:cartItem[],
    setItems:React.Dispatch<React.SetStateAction<cartItem[]>>
}
export const ShopContext = createContext<shopContextProps>({} as shopContextProps);
export type cartItem={
    id:number,
    quantity:number,
    price:number
}





export const ShopContextProvoider=({children}:ShopContextProvoiderProps)=>{
    const [items,setItems] = useState<cartItem[]>([]);
    function getTotalAmount(){
        const totalAmount = items.reduce((sum,{quantity,price})=>sum+ (quantity*price),0)
        return totalAmount;
    }
    function getTotalQuantity(){
        return items?.length || 0
    }
    function getTotalItemById(id:number){
        return items.find((item)=>item.id===id)?.quantity || 0
    }
    
    function addItem(id:number){
        
        const find = items.find((item)=>item.id===id);
        console.log(items);
        if(find){
        const itemList = items.map((item)=>(item.id===id)?{...item,quantity:item.quantity+1}:item);
        setItems(itemList);
        }
        else{
        const findItem = items2.filter((item)=>item.id===id)[0]
        const itemList = [...items,{id:id,quantity:1,price:findItem.price}];
        setItems(itemList);
        }
    }
    
    function removeItem(id:number){
        const find = items.find((item)=>item.id===id);
        if(find){
        const itemList = items.map((item)=>(item.id===id)?{...item,quantity:item.quantity-1}:item).filter((item)=>(item.quantity==0)?item.id!==id:item);
        console.log(itemList);
        setItems(itemList);
        }
    }
    
    function removeAllItem(id:number){
        const find = items.find((item)=>item.id===id);
        if(find){
        const itemList = items.filter((item)=>(item.id!==id));
        console.log(itemList);
        setItems(itemList);
        }
        //setItems([]);
    }
    return <ShopContext.Provider value={{getTotalQuantity,getTotalItemById,addItem,removeItem,removeAllItem,items,setItems,getTotalAmount}}>{children}</ShopContext.Provider>
}