package com.example.demo.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Feedback;
import com.example.demo.Service.FeedbackService;
@RestController
@CrossOrigin
public class FeedbackController {
 
     @Autowired
     FeedbackService feedbackService;
     @PostMapping("/Feedback/insert")
     public Feedback postMethodName(@RequestBody Feedback entity)
     {
        return feedbackService.feedback(entity);
    }
      @GetMapping("/GetAllFeedback")
      public List<Feedback> getAllFeedbacks()
      {
          return feedbackService.getall();
      }
}
