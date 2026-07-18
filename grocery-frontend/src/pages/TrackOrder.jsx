function TrackOrder() {
  return (
    <div className="track-page">

      <h1>🚚 Track Your Order</h1>

      <div className="track-card">

        <div className="step completed">
          ✅ Order Placed
        </div>

        <div className="step completed">
          📦 Packed
        </div>

        <div className="step active">
          🚚 Out for Delivery
        </div>

        <div className="step">
          🏠 Delivered
        </div>

      </div>

    </div>
  );
}

export default TrackOrder;