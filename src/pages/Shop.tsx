import { ShopItem } from '../components/ShopItem';
import items from './../data/item.json'
export const Shop = () => {
    //console.log(items);
    const shopData = items.map((item)=>(
        
        <ShopItem key={item.id} item={item}/>
        
    ))
    return(
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {shopData}
            </div>
        </>
    )
}