import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";

function Navbar() {

  const { cartItems } = useContext(CartContext);
  const { search, setSearch } = useContext(SearchContext);
  const storedUser = localStorage.getItem("user");
  let user = null;

  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    user = null;
  }

  return (
    <nav className="navbar">

      <div className="logo">
  <h2>🟢 FreshKart</h2>
</div>

<div className="location">
  <p>Deliver to</p>
  <h4>Aleru, Telangana</h4>
</div>

      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search for groceries..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/wishlist">
          <FaHeart className="icon"/>
        </Link>

        <Link to="/cart" className="cart-icon">

          <FaShoppingCart className="icon"/>

          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.length}
            </span>
          )}

        </Link>

        {user ? (
          <Link to="/profile" className="user-name">
            👋 {user.name || user.email?.split("@")[0] || "Customer"}
          </Link>
        ) : (
          <Link to="/login">
            <FaUser className="icon" />
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;