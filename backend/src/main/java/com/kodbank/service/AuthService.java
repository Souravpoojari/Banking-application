package com.kodbank.service;

import com.kodbank.entity.Koduser;
import com.kodbank.entity.Role;
import com.kodbank.entity.UserToken;
import com.kodbank.payload.request.LoginRequest;
import com.kodbank.payload.request.SignupRequest;
import com.kodbank.payload.response.UserInfoResponse;
import com.kodbank.repository.KoduserRepository;
import com.kodbank.repository.UserTokenRepository;
import com.kodbank.security.jwt.JwtUtils;
import com.kodbank.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    KoduserRepository userRepository;

    @Autowired
    UserTokenRepository tokenRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    public ResponseEntity<?> authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

        Koduser user = userRepository.findById(userDetails.getId()).orElseThrow();

        UserToken userToken = new UserToken(jwtCookie.getValue(), user, LocalDateTime.now().plusDays(1));
        tokenRepository.save(userToken);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(new UserInfoResponse(userDetails.getId(),
                        userDetails.getUsername(),
                        userDetails.getEmail(),
                        user.getBalance(),
                        roles));
    }

    public void registerUser(SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            throw new RuntimeException("Error: Username is already taken!");
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new RuntimeException("Error: Email is already in use!");
        }

        Koduser user = new Koduser(
                signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),
                signUpRequest.getPhone(),
                Role.CUSTOMER);

        userRepository.save(user);
    }

    public ResponseCookie logoutUser() {
        return jwtUtils.getCleanJwtCookie();
    }
}
