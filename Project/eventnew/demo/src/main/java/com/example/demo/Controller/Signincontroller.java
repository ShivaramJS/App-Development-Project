package com.example.demo.Controller;
import java.time.Instant;
import java.util.HashMap;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.nimbusds.jose.jwk.source.ImmutableSecret;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import com.example.demo.Model.Signinmodel;
import com.example.demo.Repository.SigninRepo;
// import com.example.demo.Service.SigninService;
import com.example.demo.Model.Loginfile;
import com.example.demo.Model.Signfile;
@RestController
@RequestMapping("/api/users")
public class Signincontroller {
    @Autowired
    private SigninRepo repository;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public Signincontroller(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@Valid @RequestBody Signfile registerDto, BindingResult result) {
        if (result.hasErrors()) {
            var errorsMap = new HashMap<String, String>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        var bCryptEncoder = new BCryptPasswordEncoder();
        Signinmodel userModel = new Signinmodel();
        userModel.setFirstname(registerDto.getFirstname());
        userModel.setLastname(registerDto.getLastname());
        userModel.setEmail(registerDto.getEmail());
        userModel.setDate(registerDto.getDate());
       
        
        
       
        userModel.setPassword(bCryptEncoder.encode(registerDto.getPassword()));

        try {
           
            if (repository.findByEmail(registerDto.getEmail()) != null) {
                return ResponseEntity.badRequest().body("Email already exists");
            }

            repository.save(userModel);

            String jwtToken = createJwtToken(userModel);
            var response = new HashMap<String, Object>();
            response.put("token", jwtToken);
            response.put("user", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration");
        }
    }
    

    @GetMapping("/profile")
    public ResponseEntity<Object> profile(Authentication auth) {
        var response = new HashMap<String, Object>();
        response.put("Username", auth.getName());
        response.put("Authorities", auth.getAuthorities());

        var appUser = repository.findByFirstname(auth.getName());
        response.put("User", appUser);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@Valid @RequestBody Loginfile loginDto, BindingResult result) {
        if (result.hasErrors()) {
            var errorsMap = new HashMap<String, String>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword())
            );
            Signinmodel userModel = repository.findByEmail(loginDto.getEmail());

            String jwtToken = createJwtToken(userModel);
            var response = new HashMap<String, Object>();
            response.put("token", jwtToken);
            response.put("user", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad username or password");
        }
    }


    @Value("${security.jwt.secret-key}")
    private String jwtSecretKey;

    @Value("${security.jwt.issuer}")
    private String jwtIssuer;

    private String createJwtToken(Signinmodel userModel) {
        Instant now = Instant.now();

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer(jwtIssuer)
                .issuedAt(now)
                .expiresAt(now.plusSeconds(24 * 3600))
                .subject(userModel.getFirstname())
                // .claim("role", userModel.getRole())
                .build();

        var encoder = new NimbusJwtEncoder(new ImmutableSecret<>(jwtSecretKey.getBytes()));

        var params = JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(), claims);

        return encoder.encode(params).getTokenValue();
    }
}