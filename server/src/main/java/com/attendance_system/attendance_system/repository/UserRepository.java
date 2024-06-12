package com.attendance_system.attendance_system.repository;
import com.attendance_system.attendance_system.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    User findByUsername(String username);
}
