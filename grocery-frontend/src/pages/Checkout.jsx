import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [payment, setPayment] = useState("COD");
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (
      customerName.trim() === "" ||
      mobile.trim() === "" ||
      address.trim() === "" ||
      pincode.trim() === ""
    ) {
      alert("Please fill all delivery details.");
      return;
    }

    const orderTime = new Date();
    const expectedDeliveryTime = new Date(orderTime.getTime() + 15 * 60 * 1000);
    const currentOrder = {
      id: `ORD-${Math.floor(Math.random() * 900000 + 100000)}`,
      customerName,
      mobile,
      deliveryAddress: `${address}, ${pincode}`,
      paymentMethod: payment,
      orderTime: orderTime.toISOString(),
      expectedDeliveryTime: expectedDeliveryTime.toISOString(),
      status: "Out for Delivery",
      deliveryPartner: {
        name: "Rohit Kumar",
        rating: 4.9,
        phone: "+91 98765 43210",
        vehicle: "Royal Enfield Classic",
        location: "Near City Mall, Hyderabad"
      },
      deliveryPlace: "Hyderabad, Telangana"
    };

    localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
    navigate("/success");
  };

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="address-section">

          <h2>Delivery Address</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <textarea
            placeholder="House No, Street, City"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <input
            type="text"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

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
            onClick={handlePlaceOrder}
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