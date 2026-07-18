package com.freshkart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freshkart.entity.User;
import com.freshkart.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User registerUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            throw new RuntimeException("Email already exists!");
        }

        return userRepository.save(user);
    }

    // Login User
    public User loginUser(String email, String password) {

        Optional<User> user = userRepository.findByEmail(email);

        if (user.isPresent()) {

            if (user.get().getPassword().equals(password)) {
                return user.get();
            }
        }

        return null;
    }
}