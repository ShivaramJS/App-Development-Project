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

import com.example.demo.Model.User;
import com.example.demo.Service.UserService;



@RestController
@CrossOrigin
public class UserController {
 
     @Autowired
     UserService userService;
     @PostMapping("/User/insert")
     public User postMethodName(@RequestBody User entity)
     {
        return userService.user(entity);
    }
      @GetMapping("/GetAllUsers")
      public List<User> getAllUsers()
      {
          return userService.getall();
      }
      @GetMapping("/GetUserById/{id}")
      public Optional<User> GetUserById(@PathVariable int id )
      {
          return userService.getbyid(id);
      }

      @PutMapping("/User/Update/{id}")
      public User updateUser(@RequestBody User userDetails)
      {
          return userService.updateuser( userDetails);
      }

      @DeleteMapping("/DeleteUser/{id}")
      void  deleteUser(@PathVariable int id)  //Delete user by id
      {
        userService.deleteuser(id);
      }
}
