import { useEffect, useState } from "react";

const banners = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
];

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <img src={banners[current]} alt="Offer Banner" />
    </div>
  );
}

export default Slider;