package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.PaidCustomer;
public interface PaidCustomerRepo extends JpaRepository<PaidCustomer,Integer> {

    
}
