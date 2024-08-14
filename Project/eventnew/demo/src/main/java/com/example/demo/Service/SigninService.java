package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

// import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// import com.ChessAcadamy.ChessAcademy.Repository.CoursesRepo;
import com.example.demo.Repository.SigninRepo;
import com.example.demo.Model.Signinmodel;



@Service
public class SigninService implements UserDetailsService{
    @Autowired
    private SigninRepo userRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        Signinmodel user = userRepository.findByEmail(email);
        if(user!=null)
        {
            var springUser = User.withUsername(user.getEmail())
                                .password(user.getPassword())
                                .build();
            
            return springUser;
        }
        return null;
    }
    public Signinmodel saveUser(Signinmodel user) {
        return userRepository.save(user);
    }

    public List<Signinmodel> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<Signinmodel> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public boolean userExists(String email) {
        return userRepository.existsByEmail(email);
    }

    public Signinmodel validateUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password).orElse(null);
    }
        public Optional<Signinmodel> updateUserDetails(Long id, String address, String phoneNumber) {
        Optional<Signinmodel> userDetailsOptional = userRepository.findById(id);
        if (userDetailsOptional.isPresent()) {
            Signinmodel userDetails = userDetailsOptional.get();
            if (address != null) {
                userDetails.setAddress(address);
            }
            if (phoneNumber != null) {
                userDetails.setPhoneNumber(phoneNumber);
            }
            userRepository.save(userDetails);
        }
        return userDetailsOptional;
    }
}