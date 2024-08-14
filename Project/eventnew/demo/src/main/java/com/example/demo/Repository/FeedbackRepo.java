package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Feedback;

public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {

    
}
