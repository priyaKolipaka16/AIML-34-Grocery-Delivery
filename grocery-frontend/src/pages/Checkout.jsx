import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [payment, setPayment] = useState("COD");
  const navigate = useNavigate();
  

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="address-section">

          <h2>Delivery Address</h2>

          <input type="text" placeholder="Full Name" />

          <input type="text" placeholder="Mobile Number" />

          <textarea placeholder="House No, Street, City"></textarea>

          <input type="text" placeholder="Pincode" />

        </div>

        <div className="coupon-section">

  <h2>Apply Coupon</h2>

  <input
    type="text"
    placeholder="Enter Coupon Code"
  />

  <button className="apply-btn">
    Apply
  </button>

</div>

        <div className="payment-section">

  <h2>Select Payment Method</h2>

  <label className="payment-option">
    <input
      type="radio"
      checked={payment === "COD"}
      onChange={() => setPayment("COD")}
    />
    💵 Cash on Delivery
  </label>

  <label className="payment-option">
    <input
      type="radio"
      checked={payment === "UPI"}
      onChange={() => setPayment("UPI")}
    />
    📱 UPI (Google Pay / PhonePe / Paytm)
  </label>

  <label className="payment-option">
    <input
      type="radio"
      checked={payment === "CARD"}
      onChange={() => setPayment("CARD")}
    />
    💳 Credit / Debit Card
  </label>

  <label className="payment-option">
    <input
      type="radio"
      checked={payment === "NETBANKING"}
      onChange={() => setPayment("NETBANKING")}
    />
    🏦 Net Banking
  </label>

  <button
    className="place-order"
    onClick={() => navigate("/success")}
  >
    Place Order
  </button>
  <p style={{
    marginTop: "20px",
    color: "#16a34a",
    fontWeight: "bold"
  }}>
  Selected Payment : {payment}
</p>

</div>

      </div>

    </div>
  );
}

export default Checkout;