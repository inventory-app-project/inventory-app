import React from "react";

export const Item = (props) => {
  return (
    <>
      <div>
        <img src={props.item.image} alt={props.item.name} />
        <label>{props.item.name}</label>
        <h3>£{props.item.price}</h3>
        <button>
          Purchase
        </button>
      </div>
    </>
  );
};
