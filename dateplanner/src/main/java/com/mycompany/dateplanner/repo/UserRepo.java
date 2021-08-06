package com.mycompany.dateplanner.repo;

import com.mycompany.dateplanner.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    void deleteUserById(Long id);

    Optional<User> findUserById(Long id);

    Optional<User> findUserByEmail(String email);
}
