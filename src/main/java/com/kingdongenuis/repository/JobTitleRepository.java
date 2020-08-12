package com.kingdongenuis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.JobTitle;



@Repository
public interface JobTitleRepository extends JpaRepository<JobTitle, Integer> {

}
