import React, { useState } from "react";
import "./Items.css";

const Items = (props) => {
  let [count,setcount]=useState(0);
  return (
    <div className="item">
      <img src={props.image} alt="img" />
      <div className="pop_carts">
        <div className="pop_names">
          <p>{props.name}</p>
          <span>${props.price}</span>
        </div>
        <button onClick={(value)=>{setcount(count+=1)}}>Buy Product</button>
      </div>
    </div>
  );
};
export default Items;
