import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WishlistProvider } from "./context/WishlistContext";
import { SearchProvider } from "./context/SearchContext";
import { CategoryProvider } from "./context/CategoryContext";
import "./index.css";
import App from "./App";

import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
<CategoryProvider>
  <SearchProvider>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </SearchProvider>
</CategoryProvider>
);