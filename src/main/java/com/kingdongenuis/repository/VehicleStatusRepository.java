package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.VehicleStatus;



@Repository
public interface VehicleStatusRepository extends JpaRepository<VehicleStatus, Integer> {

}
