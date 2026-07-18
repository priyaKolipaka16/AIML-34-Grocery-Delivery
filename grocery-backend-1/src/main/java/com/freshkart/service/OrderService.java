package com.freshkart.service;

import com.freshkart.entity.Order;
import com.freshkart.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    public Order placeOrder(Order order){

        order.setStatus("ORDER PLACED");

        order.setOrderTime(LocalDateTime.now());

        order.setExpectedDeliveryTime(LocalDateTime.now().plusMinutes(10));

        return repository.save(order);

    }

    public List<Order> getAllOrders(){

        return repository.findAll();

    }

}