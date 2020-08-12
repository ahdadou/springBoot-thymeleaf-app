package com.kingdongenuis.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.Location;



@Repository
public interface LocationRepository extends CrudRepository<Location, Integer> {

}
