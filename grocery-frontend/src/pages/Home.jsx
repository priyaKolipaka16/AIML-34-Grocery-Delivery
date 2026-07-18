import Hero from "../components/Hero";
import DeliveryBanner from "../components/DeliveryBanner";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Offers from "../components/Offers";
import CategoryFilter from "../components/CategoryFilter";
import Slider from "../components/Slider";
import WelcomeBanner from "../components/WelcomeBanner";

function Home() {
  return (
    <>
      <CategoryFilter />
      <Products />
      <Hero />
      <DeliveryBanner />
      <Categories />
      <Products />
      <Offers />
      <Slider />
      <WelcomeBanner />
    </>
  );
  
}

export default Home;