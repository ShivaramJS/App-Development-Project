package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.User;



public interface UserRepo extends JpaRepository<User,Integer> {

    
}
