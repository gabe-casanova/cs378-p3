import React, { useState } from "react";
import Alert from "./Alert";

const CheckoutBar = ({
  subtotal,
  cart,
  handleClearAll,
  buttonsDisabled,
  setButtonsDisabled,
}) => {
  const [showAlert, setShowAlert] = useState(false);

  const toggleOrderPlaced = (bool) => {
    // true : order button was clicked
    setShowAlert(bool);
    setButtonsDisabled(bool);
    if (!bool) {
      handleClearAll();
    }
  };

  return (
    <div>
      <div className="checkout-bar">
        <span className="subtotal">
          <b>Subtotal:</b>{" "}
          <span style={{ fontSize: "0.9em" }}>${subtotal}</span>
        </span>
        <span className="spacer" />
        <button
          className="button-style"
          disabled={buttonsDisabled}
          onClick={() => toggleOrderPlaced(true)}
        >
          Order
        </button>
        <button
          className="button-style"
          disabled={buttonsDisabled}
          onClick={handleClearAll}
          style={{ marginRight: 65 }}
        >
          Clear all
        </button>
      </div>
      {showAlert && (
        <Alert
          subtotal={subtotal}
          cart={cart}
          toggleOrderPlaced={toggleOrderPlaced}
        />
      )}
    </div>
  );
};

export default CheckoutBar;
