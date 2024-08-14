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
import com.example.demo.Model.InsuranceType;
import com.example.demo.Service.InsuranceTypeService;


@RestController
@CrossOrigin
public class InsuranceTypeController {
 
     @Autowired
     InsuranceTypeService insurancetypeService;
     @PostMapping("/InsuranceType/insert")
     public InsuranceType postMethodName(@RequestBody InsuranceType entity)
     {
        return insurancetypeService.insurancetype(entity);
    }
      @GetMapping("/GetAllInsuranceType")
      public List<InsuranceType> getAllInsuranceType()
      {
          return insurancetypeService.getall();
      }
      @GetMapping("/GetInsuranceTypeById/{id}")
      public Optional<InsuranceType> GetInsuranceTypeById(@PathVariable int id )
      {
          return insurancetypeService.getbyid(id);
      }

      @PutMapping("/InsuranceType/Update/{id}")
      public InsuranceType updateInsuranceType(@RequestBody InsuranceType insurancetypeDetails)
      {
          return insurancetypeService.updateinsurancetype( insurancetypeDetails);
      }

      @DeleteMapping("/DeleteInsuranceType/{id}")
      void  deleteInsuranceType(@PathVariable int id)
      {
          insurancetypeService.deleteinsurancetype(id);
      }
}
