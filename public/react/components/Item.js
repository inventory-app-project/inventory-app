import React from "react";

export const Item = (props) => {
  return (
    <>
      <div>
        <h3>{props.item.name}</h3>
        <img src={props.item.image} alt={props.item.name} />
      </div>
    </>
  );
};
