import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

// Products
export const getProducts = () => API.get("/products");

// Users
export const getUsers = () => API.get("/users");

// Orders
export const getOrders = () => API.get("/orders");

// Delivery Partners
export const getDeliveryPartners = () => API.get("/delivery-partners");