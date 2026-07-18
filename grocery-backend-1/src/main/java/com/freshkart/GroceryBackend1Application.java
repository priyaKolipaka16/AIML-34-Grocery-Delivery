package com.freshkart;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.freshkart.entity.Product;
import com.freshkart.repository.ProductRepository;

@SpringBootApplication
public class GroceryBackend1Application {

	public static void main(String[] args) {
		SpringApplication.run(GroceryBackend1Application.class, args);
	}

	@Bean
	public CommandLineRunner seedProducts(ProductRepository productRepository) {
		return args -> {
			if (productRepository.count() == 0) {
				productRepository.saveAll(List.of(
					new Product(1L, "Fresh Apples", "Fruits", 149, 199, 4.8, "/images/apple.jpg", "25% OFF", 245, "In Stock"),
					new Product(2L, "Fresh Bananas", "Fruits", 59, 79, 4.7, "/images/banana.jpg", "20% OFF", 182, "In Stock"),
					new Product(3L, "Fresh Avocado", "Fruits", 199, 249, 4.9, "/images/avocado.jpg", "20% OFF", 310, "Only 5 Left"),
					new Product(4L, "Fresh Tomatoes", "Vegetables", 39, 55, 4.6, "/images/tomato.jpg", "30% OFF", 156, "In Stock"),
					new Product(5L, "Milk", "Dairy", 65, 80, 4.9, "/images/milk.jpg", "18% OFF", 420, "In Stock"),
					new Product(6L, "Bread", "Bakery", 45, 55, 4.7, "/images/bread.jpg", "15% OFF", 198, "Only 3 Left"),
					new Product(7L, "Rice", "Grains", 499, 599, 4.8, "/images/rice.jpg", "17% OFF", 275, "In Stock"),
					new Product(8L, "Cherry", "Fruits", 299, 349, 4.8, "/images/cherry.jpg", "15% OFF", 145, "Only 2 Left"),
					new Product(9L, "Watermelon", "Fruits", 89, 110, 4.7, "/images/watermelon.jpg", "19% OFF", 167, "In Stock"),
					new Product(10L, "Bingo Chilli Chips", "Snacks", 35, 50, 4.6, "/images/ChilliBingo.jpg", "20% OFF", 98, "In Stock")
				));
			}
		};
	}
}
