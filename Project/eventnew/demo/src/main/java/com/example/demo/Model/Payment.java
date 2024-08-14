package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String cardNumber;
    private String expiryDate;
    private int cvv;

    @ManyToOne
    @JoinColumn(name = "paid_customer_id")
    private PaidCustomer paidCustomer;
}
