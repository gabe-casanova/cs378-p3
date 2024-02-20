import React, { useState } from "react";
import "./App.css";

// import custom components
import Logo from "./components/Logo";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import MenuItem from "./components/MenuItem";
import CheckoutBar from "./components/CheckoutBar";

// import menu data
import menuInfo from "./data/MenuInfo";

function App() {
  const [subtotal, setSubtotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [shouldReset, setShouldReset] = useState(false); // keeps track if we need to reset: subtotal, cart, quantitySelectors
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // keeps track if the main buttons should be clickable, based on if Alert is currently showing

  const updateSubtotal = (amount) => {
    setSubtotal(subtotal + amount);
  };

  const updateCart = (item, quantity) => {
    const index = cart.findIndex((cartItem) => cartItem.title === item.title);
    if (index !== -1) {
      // if the item is already in the cart, update quantity ordered
      const updatedCart = [...cart];
      updatedCart[index].quantity += quantity;
      if (updatedCart[index].quantity <= 0) {
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    } else if (quantity > 0) {
      // this is a new item, add it to the cart
      setCart([
        ...cart,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: quantity,
        },
      ]);
    }
  };

  const reset = () => {
    setSubtotal(0);
    setCart([]);
    setShouldReset(true);
  };

  return (
    <div>
      <Logo />
      <Header />
      <Subheader />
      <div className="menu-container">
        {menuInfo.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            updateSubtotal={updateSubtotal}
            updateCart={updateCart}
            shouldReset={shouldReset}
            setShouldReset={setShouldReset}
            buttonsDisabled={buttonsDisabled}
          />
        ))}
      </div>
      <CheckoutBar
        subtotal={subtotal}
        cart={cart}
        handleClearAll={reset}
        buttonsDisabled={buttonsDisabled}
        setButtonsDisabled={setButtonsDisabled}
      />
    </div>
  );
}

export default App;
