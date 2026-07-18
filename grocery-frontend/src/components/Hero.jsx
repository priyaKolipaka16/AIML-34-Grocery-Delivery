function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>Groceries delivered in 11 minutes</h1>

        <p>
          Fresh fruits, vegetables, dairy products,
          snacks and daily essentials delivered at your doorstep.
        </p>

        <button>Shop Now</button>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
          alt="Groceries"
        />

      </div>

    </section>
  );
}

export default Hero;