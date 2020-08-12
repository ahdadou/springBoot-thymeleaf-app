package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.Supplier;



@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Integer> {

}
