package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Signinmodel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // or GenerationType.AUTO, depending on your preference
    private Long id;
    
    private String firstname;
    private String lastname;
    private String email;
    private String password;
     private String date;
    private String address;
    private String phoneNumber;

    // @JsonManagedReference
}