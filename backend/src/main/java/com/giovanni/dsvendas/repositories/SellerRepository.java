package com.giovanni.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giovanni.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
