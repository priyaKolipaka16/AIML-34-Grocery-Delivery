import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-page">

      <div className="success-card">

        <h1>🎉 Order Placed Successfully!</h1>

        <h2>Thank You for Shopping with FreshKart ❤️</h2>

        <p>Your groceries will arrive in approximately 11 minutes.</p>

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