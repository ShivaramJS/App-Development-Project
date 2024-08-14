package com.example.demo.Service;

// import java.lang.foreign.Linker.Option;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Feedback;
import com.example.demo.Repository.FeedbackRepo;
@Service
public class FeedbackService {
     @Autowired
     FeedbackRepo feedbackrepo;

     public Feedback feedback(Feedback U)
     {
        return feedbackrepo.save(U);
     }
     
      public List<Feedback> getall()
      {
         return feedbackrepo.findAll();
      }
}
