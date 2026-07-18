import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { FaHeart, FaStar } from "react-icons/fa";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  const {
    addToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const getCartItem = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  return (
    <div className="wishlist-page">

      <h1>❤️ My Wishlist</h1>

      {wishlistItems.length === 0 ? (

        <h2>Your Wishlist is Empty ❤️</h2>

      ) : (

        <div className="product-grid">

          {wishlistItems.map((item) => (

            <div className="product-card" key={item.id}>

              <span className="discount">
                {item.discount}
              </span>

              <FaHeart
                className="heart"
                color="red"
                onClick={() => removeFromWishlist(item.id)}
                style={{ cursor: "pointer" }}
              />

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p className="delivery-time">
                ⚡ Delivery in 11 mins
              </p>

              <p className="rating">
                <FaStar color="orange" /> {item.rating}
              </p>

              <h4>
                ₹{item.price}
                <span> ₹{item.oldPrice}</span>
              </h4>

              {getCartItem(item.id) ? (

                <div className="quantity-box">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span>
                    {getCartItem(item.id).quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

              ) : (

                <button
                  className="add-btn"
                  onClick={() => addToCart(item)}
                >
                  ADD TO CART
                </button>

              )}

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Wishlist;