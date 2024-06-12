package attendance_system.attendance_system.controllers;

import attendance_system.attendance_system.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupUserController {
    @Autowired
    private AuthService authService;
}
