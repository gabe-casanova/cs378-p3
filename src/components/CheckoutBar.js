import React from "react";

const CheckoutBar = ({ subtotal, cart }) => {
  return (
    <div className="checkout-bar">
      <span className="subtotal">
        <b>Subtotal:</b> <span style={{ fontSize: "0.9em" }}>${subtotal}</span>
      </span>
      <span className="spacer" />
      <button>Order</button>
      <button style={{ marginRight: 65 }}>
        Clear all
      </button>
    </div>
  );
};

export default CheckoutBar;
