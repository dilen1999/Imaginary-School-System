package attendance_system.attendance_system.serviceimpl;

import attendance_system.attendance_system.repositories.UserRepository;
import attendance_system.attendance_system.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    private UserRepository userRepository;
}
