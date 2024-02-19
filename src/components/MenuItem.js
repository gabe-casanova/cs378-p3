import React from "react";
import QuantitySelector from "./QuantitySelector";

const MenuItem = ({ item, updateSubtotal, updateCart }) => {
  const { title, description, image_src, price } = item;
  return (
    <div className="menu-entry">
      <img className="food-image" src={image_src} alt={title} />
      <div className="food-info-container">
        <div className="name-price-row">
          <span className="food-name">{title}</span>
          <span className="price">${price}</span>
        </div>
        <div className="food-caption">{description}</div>
        <QuantitySelector
          updateSubtotal={updateSubtotal}
          updateCart={updateCart}
          item={item}
        />
      </div>
    </div>
  );
};

export default MenuItem;
