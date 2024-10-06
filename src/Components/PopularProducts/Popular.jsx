import React from 'react'
import popularproducts from '../Assets/Data'
import Items from '../Order_items/Items'
import "./Popular.css"

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular Coffees</h1>
        <hr />
        <div className="popular_item">
            {popularproducts.map((items,i)=>{
                return <Items key={i} id={items.id} name={items.name} price={items.price} image={items.image}/>
            })}
        </div>
    </div>
  )
}
