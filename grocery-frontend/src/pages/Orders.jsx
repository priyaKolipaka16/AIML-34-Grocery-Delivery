function Orders() {

  return (

    <div className="orders-page">

      <h1>📦 My Orders</h1>

      <div className="order-card">

        <img
          src="/images/apple.jpg"
          alt="Apple"
        />

        <div>

          <h3>Fresh Apples</h3>

          <p>Quantity : 2</p>

          <p>Price : ₹298</p>

          <p className="delivered">
            ✅ Delivered
          </p>

        </div>

      </div>

    </div>

  );

}

export default Orders;