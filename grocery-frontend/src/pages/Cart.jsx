import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = total > 500 ? 0 : 40;
  const platformFee = 5;
  const gst = Math.round(total * 0.05);

  const grandTotal =
    total + deliveryFee + platformFee + gst;

  return (
    <div className="cart-page">

      <h1>🛒 My Cart</h1>

      {cartItems.length === 0 ? (

        <h2>Your cart is empty.</h2>

      ) : (

        <>
          {cartItems.map((item) => (

            <div className="cart-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p>₹ {item.price}</p>

                <div className="quantity-box">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

          <div className="bill-summary">

            <h2>Bill Summary</h2>

            <div className="bill-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>

            <div className="bill-row">
              <span>Delivery Fee</span>
              <span>
                {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
              </span>
            </div>

            <div className="bill-row">
              <span>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>

            <div className="bill-row">
              <span>GST (5%)</span>
              <span>₹{gst}</span>
            </div>

            <hr />

            <div className="bill-row total-row">
              <span>Total Amount</span>
              <span>₹{grandTotal}</span>
            </div>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </Link>

          </div>

        </>

      )}

    </div>
  );
}

export default Cart;