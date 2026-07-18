package com.freshkart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshkart.entity.Product;
import com.freshkart.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Save a product
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    // Get product by ID
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    // Delete product
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}