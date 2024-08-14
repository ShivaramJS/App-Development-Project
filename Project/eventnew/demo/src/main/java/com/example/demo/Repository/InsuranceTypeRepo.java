package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.InsuranceType;



public interface InsuranceTypeRepo extends JpaRepository<InsuranceType,Integer> {

    
}
