package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
public class PaidCustomer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String dob;

    @OneToMany(mappedBy = "paidCustomer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Payment> payments;
}
