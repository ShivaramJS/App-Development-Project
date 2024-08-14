package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Payment;
import com.example.demo.Service.PaymentService;

@RestController
@CrossOrigin
public class PaymentController {
 
     @Autowired
     PaymentService paymentService;
     @PostMapping("/Payment/insert")
     public Payment postMethodName(@RequestBody Payment entity)
     {
        return paymentService.payment(entity);
    }
      @GetMapping("/GetAllPayment")
      public List<Payment> getAllPayment()
      {
          return paymentService.getall();
      }
}
