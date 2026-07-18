import { Link } from "react-router-dom";

function Profile() {
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <h1>👤 My Profile</h1>

        <h2>{user ? user.split("@")[0] : "Guest User"}</h2>

        <p>📧 {user || "Not Logged In"}</p>

        <hr />

        <Link to="/wishlist" className="profile-btn">
          ❤️ My Wishlist
        </Link>

        <Link to="/cart" className="profile-btn">
          🛒 My Cart
        </Link>

        <Link to="/checkout" className="profile-btn">
          💳 Checkout
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;