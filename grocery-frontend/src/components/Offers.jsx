function Offers() {
  const offers = [
    {
      title: "Up to 50% OFF",
      subtitle: "Fresh Fruits",
      color: "#FFE082"
    },
    {
      title: "Buy 1 Get 1",
      subtitle: "Dairy Products",
      color: "#C8E6C9"
    },
    {
      title: "30% OFF",
      subtitle: "Snacks",
      color: "#FFCDD2"
    },
    {
      title: "Free Delivery",
      subtitle: "On Orders Above ₹499",
      color: "#BBDEFB"
    }
  ];

  return (
    <section className="offers">
      <h2>Today's Offers</h2>

      <div className="offer-grid">
        {offers.map((offer, index) => (
          <div
            className="offer-card"
            key={index}
            style={{ backgroundColor: offer.color }}
          >
            <h3>{offer.title}</h3>
            <p>{offer.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;