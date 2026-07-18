package com.freshkart.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {

    @Id
    private Long id;

    private String name;
    private String category;
    private double price;
    private double oldPrice;
    private double rating;
    private String image;
    private String discount;
    private int reviews;
    private String stock;

    public Product() {
    }

    public Product(Long id, String name, String category, double price,
                   double oldPrice, double rating, String image,
                   String discount, int reviews, String stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.oldPrice = oldPrice;
        this.rating = rating;
        this.image = image;
        this.discount = discount;
        this.reviews = reviews;
        this.stock = stock;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getOldPrice() {
        return oldPrice;
    }

    public void setOldPrice(double oldPrice) {
        this.oldPrice = oldPrice;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public int getReviews() {
        return reviews;
    }

    public void setReviews(int reviews) {
        this.reviews = reviews;
    }

    public String getStock() {
        return stock;
    }

    public void setStock(String stock) {
        this.stock = stock;
    }
}