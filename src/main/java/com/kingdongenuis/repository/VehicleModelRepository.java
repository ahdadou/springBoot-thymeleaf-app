package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.VehicleModel;



@Repository
public interface VehicleModelRepository extends JpaRepository<VehicleModel, Integer> {

}
