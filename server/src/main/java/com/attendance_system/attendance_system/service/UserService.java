package com.attendance_system.attendance_system.service;

import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.User;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    private Map<String, String> users = new HashMap<>();

    @PostConstruct
    public void init() {
        try {
            Path path = Path.of("src/main/resources/users.txt");
            Files.lines(path).forEach(line -> {
                String[] parts = line.split(":");
                if (parts.length == 2) {
                    users.put(parts[0], parts[1]);
                }
            });
        } catch (IOException e) {
            throw new RuntimeException("Could not read users file", e);
        }
    }

    public boolean isValidUser(String username, String password) {
        return users.containsKey(username) && users.get(username).equals(password);
    }

    public UserDetails loadUserByUsername(String username) {
        String password = users.get(username);
        if (password == null) {
            throw new UsernameNotFoundException("User not found: " + username);
        }
        return User.withUsername(username).password(password).authorities("USER").build();
    }
}
