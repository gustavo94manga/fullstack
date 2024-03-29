package com.angel.jwt.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.angel.jwt.dtos.CredentialsDto;
import com.angel.jwt.dtos.SignUpDto;
import com.angel.jwt.dtos.UserDto;
import com.angel.jwt.securityConfig.UserAuthenticationProvider;
import com.angel.jwt.services.UserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthController {

	@Autowired
    private UserService userService;
	@Autowired
    private UserAuthenticationProvider userAuthenticationProvider;

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody @Valid CredentialsDto credentialsDto) {
        UserDto userDto = userService.login(credentialsDto);
        userDto.setToken(userAuthenticationProvider.createToken(userDto));
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody @Valid SignUpDto user) {
        UserDto createdUser = userService.register(user);
        createdUser.setToken(userAuthenticationProvider.createToken(createdUser));
        return ResponseEntity.created(URI.create("/users/" + createdUser.getId())).body(createdUser);
    }

}
