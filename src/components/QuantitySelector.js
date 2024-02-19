import React, { useState } from "react";

const QuantitySelector = ({ updateSubtotal, updateCart, item }) => {
  // locally store each QuantitySelector's item counter
  const [numOrdered, setNumOrdered] = useState(0);

  const updateCount = (amount) => {
    const newCount = numOrdered + amount;
    if (newCount >= 0) {
      setNumOrdered(newCount);
      updateSubtotal(amount * item.price);
      updateCart(item, amount);
    }
  };

  return (
    <div className="quantity-selector-container">
      <button onClick={() => updateCount(-1)}>-</button>
      <span id="quantity-ordered">{numOrdered}</span>
      <button onClick={() => updateCount(1)}>+</button>
    </div>
  );
};

export default QuantitySelector;
