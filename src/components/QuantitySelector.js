import React, { useState, useEffect } from "react";

const QuantitySelector = ({
  updateSubtotal,
  updateCart,
  item,
  shouldReset,
  setShouldReset,
  buttonsDisabled,
}) => {
  // locally store each QuantitySelector's item counter
  const [numOrdered, setNumOrdered] = useState(0);

  useEffect(() => {
    if (shouldReset) {
      setNumOrdered(0);
      setShouldReset(false);
    }
  }, [shouldReset, setShouldReset]);

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
      <button disabled={buttonsDisabled} onClick={() => updateCount(-1)}>
        -
      </button>
      <span id="quantity-ordered">{numOrdered}</span>
      <button disabled={buttonsDisabled} onClick={() => updateCount(1)}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
