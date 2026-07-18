import { FaHeart, FaStar } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productApi";
import productsData from "../data/products";

function Products() {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const { addToWishlist } = useContext(WishlistContext);
  const { search } = useContext(SearchContext);
  const { category } = useContext(CategoryContext);

  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
  getProducts()
    .then((res) => {
      console.log("Response:", res);
      console.log("Products:", res.data);
      setProducts(res.data.length ? res.data : productsData);
    })
    .catch((err) => {
      console.log("Error:", err);
      setProducts(productsData);
    });
}, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      console.log("Products:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCartItem = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  // Search + Category Filter
  let filteredProducts = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sorting
  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <section className="products">

      <h2>Best Selling Products</h2>

      <h3>Total Products: {filteredProducts.length}</h3>

      <div className="sort-section">
        <label>Sort By: </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          No Products Found 😔
        </h2>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>

              <span className="discount">{item.discount}</span>

              <FaHeart
                className="heart"
                style={{ cursor: "pointer" }}
                onClick={() => addToWishlist(item)}
              />

              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </Link>

              <p className="delivery-time">
                ⚡ Delivery in 11 mins
              </p>

              <p className="rating">
                <FaStar color="orange" /> {item.rating}
              </p>

              <p className="reviews">
                {item.reviews} Reviews
              </p>

              <p className="stock">
                {item.stock}
              </p>

              <h4>
                ₹{item.price}
                <span> ₹{item.oldPrice}</span>
              </h4>

              <p className="saved">
                Save ₹{item.oldPrice - item.price}
              </p>

              {getCartItem(item.id) ? (
                <div className="quantity-box">
                  <button onClick={() => decreaseQuantity(item.id)}>
                    -
                  </button>

                  <span>{getCartItem(item.id).quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="add-btn"
                  onClick={() => addToCart(item)}
                >
                  ADD
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;