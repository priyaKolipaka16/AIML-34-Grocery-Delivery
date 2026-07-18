import { Link } from "react-router-dom";

function OrderSuccess() {
  const currentOrder = JSON.parse(localStorage.getItem("currentOrder") || "null");

  return (
    <div className="success-page">

      <div className="success-card">

        <h1>🎉 Order Placed Successfully!</h1>

        <h2>Thank You for Shopping with FreshKart ❤️</h2>

        {currentOrder ? (
          <>
            <p>
              Order ID: <strong>{currentOrder.id}</strong>
            </p>
            <p>
              Placed at: <strong>{new Date(currentOrder.orderTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong>
            </p>
            <p>
              Delivery by: <strong>{currentOrder.deliveryPartner.name}</strong> ({currentOrder.deliveryPartner.rating} ★)
            </p>
            <p>
              Delivery Location: <strong>{currentOrder.deliveryPlace}</strong>
            </p>
            <p>
              Contact: <strong>{currentOrder.deliveryPartner.phone}</strong>
            </p>
            <p>
              Vehicle: <strong>{currentOrder.deliveryPartner.vehicle}</strong>
            </p>
            <p>
              Expected arrival: <strong>{new Date(currentOrder.expectedDeliveryTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong>
            </p>
          </>
        ) : (
          <p>Your order is being processed. Please wait...</p>
        )}

        <Link to="/">
          <button className="home-btn">
            Continue Shopping
          </button>
        </Link>

        <Link to="/orders">
          <button className="orders-btn">
            View My Orders
          </button>
        </Link>

        <Link to="/track">
        <button className="track-btn">
            🚚 Track Order
            </button>
            </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;