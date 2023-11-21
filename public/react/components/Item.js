import React from "react";

export const Item = (props) => {
  return (
    <>
      <div className='container'>
        <img src={props.item.image} alt={props.item.name} />
        <label>{props.item.name}</label>
        <h3>£{props.item.price}</h3>
      </div>
    </>
  );
};
