package com.angel.jwt.dtos;

public record SignUpDto (String firstName, String lastName, String login, char[] password) { }
