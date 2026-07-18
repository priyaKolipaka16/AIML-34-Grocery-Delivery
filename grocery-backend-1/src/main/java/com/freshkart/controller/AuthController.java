package com.freshkart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.freshkart.entity.User;
import com.freshkart.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5179")
public class AuthController {

    @Autowired
    private UserService userService;

    // Register
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user);
    }

    // Login
    @PostMapping("/login")
    public User login(@RequestBody User user) {

        User loggedUser = userService.loginUser(
                user.getEmail(),
                user.getPassword());

        if (loggedUser == null) {
            throw new RuntimeException("Invalid Email or Password");
        }

        return loggedUser;
    }

}