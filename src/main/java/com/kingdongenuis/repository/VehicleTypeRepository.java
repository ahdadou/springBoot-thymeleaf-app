package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.VehicleType;



@Repository
public interface VehicleTypeRepository extends JpaRepository<VehicleType, Integer> {

}
