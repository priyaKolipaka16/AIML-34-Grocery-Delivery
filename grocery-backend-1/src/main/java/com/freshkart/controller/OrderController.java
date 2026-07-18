package com.freshkart.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.freshkart.entity.Order;
import com.freshkart.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderService service;

    // Place Order
    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        return service.placeOrder(order);
    }

    // Get All Orders
    @GetMapping
    public List<Order> getAllOrders() {
        return service.getAllOrders();
    }

}