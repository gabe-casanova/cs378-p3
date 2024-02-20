const Alert = ({ subtotal, cart, toggleOrderPlaced }) => {
  const formattedCart = (cart) => {
    if (cart.length === 0) {
      return (
        <>
          <div className="alert-header">No items in cart.</div>
        </>
      );
    } else {
      return (
        <>
          <div className="alert-header">Order placed!</div>
          <div className="alert-subtotal">
            Total: <span>${subtotal}</span>
          </div>
          <hr />
          {cart.map((item) => (
            <div key={item.id} className="ordered-item">
              {item.title} <span>({item.quantity})</span>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <div className="alert">
      <span className="alert-text">{formattedCart(cart)}</span>
      <div>
        <button
          className="button-style"
          onClick={() => toggleOrderPlaced(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
