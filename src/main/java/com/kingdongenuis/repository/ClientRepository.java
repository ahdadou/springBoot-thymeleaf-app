package com.kingdongenuis.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.Client;



@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

}
