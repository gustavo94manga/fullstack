 package com.angel.jwt.controllers;

 import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin(origins = "http://localhost:4200")
 @RestController
 public class MessagesController {

     @GetMapping("/messages")
     public ResponseEntity<List<String>> messages() {
         return ResponseEntity.ok(Arrays.asList("first", "second"));
     }
 }
