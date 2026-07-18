import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details">

      <img
        src={product.image}
        alt={product.name}
        className="details-image"
      />

      <div className="details-info">

        <h1>{product.name}</h1>

        <p className="rating">
          <FaStar color="orange" /> {product.rating}
        </p>

        <p className="reviews">
          {product.reviews} Reviews
        </p>

        <p className="stock">
          {product.stock}
        </p>

        <h2>₹{product.price}</h2>

        <p>
          <del>₹{product.oldPrice}</del>
        </p>

        <p className="saved">
          Save ₹{product.oldPrice - product.price}
        </p>

        <p>
          Fresh and premium quality product delivered within 11 minutes.
        </p>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>

        <br />
        <br />

        <Link to="/products">
          <button className="back-btn">
            ← Back to Products
          </button>
        </Link>

      </div>

    </div>
  );
}

export default ProductDetails;