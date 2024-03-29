package com.angel.jwt.mappers;

import com.angel.jwt.dtos.SignUpDto;
import com.angel.jwt.dtos.UserDto;
import com.angel.jwt.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
