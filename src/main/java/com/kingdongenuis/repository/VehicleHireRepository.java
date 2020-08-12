package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.VehicleHire;



@Repository
public interface VehicleHireRepository extends JpaRepository<VehicleHire, Integer> {

}
