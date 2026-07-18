import Products from "../components/Products";

function ProductsPage() {
  return (
    <div className="products-page">
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        All Grocery Products
      </h1>

      <Products />
    </div>
  );
}

export default ProductsPage;