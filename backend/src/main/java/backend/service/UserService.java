package backend.service;

import backend.entity.User;
import backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User register(User user) {
        if (repository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Email already exists");
        }

        return repository.save(user);
    }

    public User login(String email, String password) {
        User user = repository.findByEmail(email);

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}