package com.example.demo.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Data
@Entity
public class InsuranceType {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
     private String type;
     private String description;
     private String icon;
}
