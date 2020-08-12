package com.kingdongenuis.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kingdongenuis.models.Invoice;



@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Integer> {

}
