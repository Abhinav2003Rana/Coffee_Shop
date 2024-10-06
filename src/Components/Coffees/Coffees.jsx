import React, { useState } from "react";
import "./Coffees.css";
import { Coffeesfun } from "./coffeesfun";
import coffeeItems from "../Assets/CoffeeData";
import Items from '../Order_items/Items'

export const Coffees = () => {
  const [value, setvalue] = useState("all");
  return (
    <div className="coffee">
      <div className="upper">
        <p>Showing products</p>
        <div className="btnsorder">
          <button onClick={()=>{setvalue("hot")}}>Hot Coffee</button>
          <button onClick={()=>{setvalue("cold")}}>Cold Coffee</button>
        </div>
      </div>
      <div className="downer">
      {value==="all"?coffeeItems.map((items,i)=>{
                return <Items key={i} id={items.id} name={items.name} price={items.price} image={items.image}/>
            }):Coffeesfun(value)}  
      </div>
    </div>
  );
};
