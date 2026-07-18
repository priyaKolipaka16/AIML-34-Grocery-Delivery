package com.freshkart.controller;

import com.freshkart.entity.DeliveryPartner;
import com.freshkart.service.DeliveryPartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/delivery")
@CrossOrigin(origins = "*")
public class DeliveryPartnerController {

    @Autowired
    private DeliveryPartnerService service;

    @GetMapping
    public List<DeliveryPartner> getAllPartners(){

        return service.getAllPartners();

    }

    @PostMapping
    public DeliveryPartner savePartner(@RequestBody DeliveryPartner partner){

        return service.savePartner(partner);

    }

}