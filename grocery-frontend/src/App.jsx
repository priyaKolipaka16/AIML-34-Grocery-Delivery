import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/success" element={<OrderSuccess />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/track" element={<TrackOrder />} />

        <Route path="/admin/dashboard" element={<ProtectedRoute role="ADMIN"><AdminDashboard /></ProtectedRoute>}/>

        <Route path="/delivery/dashboard" element={<ProtectedRoute role="DELIVERY"> <DeliveryDashboard /></ProtectedRoute>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;