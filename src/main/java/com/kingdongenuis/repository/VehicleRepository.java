package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.Vehicle;



@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer>{

}
