package com.attendance_system.attendance_system.dto;

import lombok.Data;

@Data
public class UserLoginRequest {
    private String username;
    private String password;
}
