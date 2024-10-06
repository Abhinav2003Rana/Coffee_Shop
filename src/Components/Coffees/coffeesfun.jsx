import React from "react";
import Items from '../Order_items/Items'
import coffeeItems from '../Assets/CoffeeData'
import "./Coffees.css";

export const Coffeesfun = (value) => {
  return (
    <div className="downer">
      {coffeeItems.map((items, i)=>{
        if (items.category === value){
            return (
                <Items
                  key={i}
                  id={items.id}
                  name={items.name}
                  price={items.price}
                  image={items.image}
                />
              );
        }
      })}
    </div>
  );
};
