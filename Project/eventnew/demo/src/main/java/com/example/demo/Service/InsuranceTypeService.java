package com.example.demo.Service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Repository.*;
import com.example.demo.Model.InsuranceType;
@Service
public class InsuranceTypeService {
     @Autowired
     InsuranceTypeRepo insurancetyperepo;

     public InsuranceType insurancetype(InsuranceType U)
     {
        return insurancetyperepo.save(U);
     }
     
      public List<InsuranceType> getall()
      {
         return insurancetyperepo.findAll();
      }

      public Optional<InsuranceType> getbyid(int id)
      {
         return insurancetyperepo.findById(id);
      }

      public InsuranceType updateinsurancetype(InsuranceType insurancetype)
      {
         return insurancetyperepo.save(insurancetype);
      }
       public void deleteinsurancetype(int id)
      {
          insurancetyperepo.deleteById(id);
      }
}
