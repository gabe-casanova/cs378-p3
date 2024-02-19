const CheckoutBar = () => {
  return (
    <div className="checkout-bar">
        <span className="subtotal">Subtotal: $0</span>
        <span className="spacer" />
        <button>Order</button>
        <button id="clear-all-button">Clear all</button>
    </div>
  )
}

export default CheckoutBar