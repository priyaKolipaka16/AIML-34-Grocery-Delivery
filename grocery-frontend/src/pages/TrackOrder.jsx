function TrackOrder() {
  const currentOrder = JSON.parse(localStorage.getItem("currentOrder") || "null");

  return (
    <div className="track-page">

      <h1>🚚 Track Your Order</h1>

      {currentOrder ? (
        <>
          <div className="track-card">
            <div className="step completed">✅ Order Placed</div>
            <div className="step completed">📦 Packed</div>
            <div className="step active">🚚 Out for Delivery</div>
            <div className="step">🏠 Delivered</div>
          </div>

          <div className="delivery-summary">
            <h2>Delivery Details</h2>
            <p>
              <strong>Order ID:</strong> {currentOrder.id}
            </p>
            <p>
              <strong>Order Time:</strong> {new Date(currentOrder.orderTime).toLocaleString()}
            </p>
            <p>
              <strong>Expected Delivery Time:</strong> {new Date(currentOrder.expectedDeliveryTime).toLocaleString()}
            </p>
            <p>
              <strong>Delivery Place:</strong> {currentOrder.deliveryPlace}
            </p>
            <p>
              <strong>Delivery Partner:</strong> {currentOrder.deliveryPartner.name}
            </p>
            <p>
              <strong>Partner Rating:</strong> {currentOrder.deliveryPartner.rating} ★
            </p>
            <p>
              <strong>Partner Contact:</strong> {currentOrder.deliveryPartner.phone}
            </p>
            <p>
              <strong>Partner Location:</strong> {currentOrder.deliveryPartner.location}
            </p>
            <p>
              <strong>Vehicle:</strong> {currentOrder.deliveryPartner.vehicle}
            </p>
          </div>
        </>
      ) : (
        <p>No active order found. Please place an order first.</p>
      )}

    </div>
  );
}

export default TrackOrder;