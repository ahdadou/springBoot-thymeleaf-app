package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.VehicleMake;



@Repository
public interface VehicleMakeRepository extends JpaRepository<VehicleMake, Integer> {

}
