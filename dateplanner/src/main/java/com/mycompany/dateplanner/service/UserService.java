package com.mycompany.dateplanner.service;

import com.mycompany.dateplanner.exception.RecordNotFoundException;
import com.mycompany.dateplanner.model.User;
import com.mycompany.dateplanner.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User addUser(User user) {
        return userRepo.save(user);
    }

    public User updateUser(User user) {
        return userRepo.save(user);
    }

    @Transactional
    public void deleteUser(Long id) {
        userRepo.deleteUserById(id);
    }

    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    public User findUserById(Long id) {
        return userRepo.findUserById(id)
                .orElseThrow(() -> new RecordNotFoundException("User by id " + id + " not found"));
    }
}
