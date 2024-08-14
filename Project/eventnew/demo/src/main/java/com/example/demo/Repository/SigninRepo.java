package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Signinmodel;;

public interface SigninRepo extends JpaRepository<Signinmodel, Long> {
    public Signinmodel findByFirstname(String firstname);
    public Signinmodel findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<Signinmodel> findByEmailAndPassword(String email, String password);
}