package com.example.demo.Service;

// import java.lang.foreign.Linker.Option;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Payment;
import com.example.demo.Repository.PaymentRepo;

@Service
public class PaymentService {
     @Autowired
     PaymentRepo paymentrepo;

     public  Payment payment(Payment U)
     {
        return paymentrepo.save(U);
     }
     
      public List<Payment> getall()
      {
         return paymentrepo.findAll();
      }

      public Optional<Payment> getbyid(int id)
      {
         return paymentrepo.findById(id);
      }
}
