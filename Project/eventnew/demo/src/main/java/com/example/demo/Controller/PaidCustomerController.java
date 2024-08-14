package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.PaidCustomer;
import com.example.demo.Service.PaidCustomerService;
@RestController
@CrossOrigin
public class PaidCustomerController {
 
     @Autowired
     PaidCustomerService paidcustomerService;
     
     @PostMapping("/PaidCustomer/insert")
     public PaidCustomer postMethodName(@RequestBody PaidCustomer entity)
     {
        return paidcustomerService.paidcustomer(entity);
    }

      @GetMapping("/GetAllPaidCustomer")
      public List<PaidCustomer> getAllPaidCustomer()
      {
          return paidcustomerService.getall();
      }
      @GetMapping("/GetPaidCustomerById/{id}")
      public Optional<PaidCustomer> GetById(@PathVariable int id )
      {
          return paidcustomerService.getbyid(id);
      }

      @PutMapping("/PaidCustomer/Update/{id}")
      public PaidCustomer updatepPaidCustomer(@RequestBody PaidCustomer Details)
      {
          return paidcustomerService.updatepaidcustomer( Details);
      }
      @DeleteMapping("/DeletePaidCustomer/{id}")
      void  deletePaidCustomer(@PathVariable int id)
      {
            paidcustomerService.deletepaidcustomer(id);
      }
}
