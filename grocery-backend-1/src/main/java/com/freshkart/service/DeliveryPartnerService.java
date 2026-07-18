package com.freshkart.service;

import com.freshkart.entity.DeliveryPartner;
import com.freshkart.repository.DeliveryPartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryPartnerService {

    @Autowired
    private DeliveryPartnerRepository repository;

    public List<DeliveryPartner> getAllPartners(){

        return repository.findAll();

    }

    public DeliveryPartner savePartner(DeliveryPartner partner){

        return repository.save(partner);

    }

}