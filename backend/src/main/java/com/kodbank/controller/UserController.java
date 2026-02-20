package com.kodbank.controller;

import com.kodbank.entity.Koduser;
import com.kodbank.payload.response.BalanceResponse;
import com.kodbank.repository.KoduserRepository;
import com.kodbank.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    KoduserRepository userRepository;

    @GetMapping("/balance")
    @PreAuthorize("hasRole('CUSTOMER') or hasRole('MANAGER') or hasRole('ADMIN')")
    public ResponseEntity<?> getUserBalance() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        Koduser user = userRepository.findById(userDetails.getId()).orElseThrow();

        return ResponseEntity.ok(new BalanceResponse(user.getBalance()));
    }
}
