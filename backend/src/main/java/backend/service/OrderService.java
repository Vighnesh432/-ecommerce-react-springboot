package backend.service;

import backend.entity.Order;
import backend.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository repository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    public Order saveOrder(Order order) {
        return repository.save(order);
    }

    public List<Order> getOrdersByUserEmail(String email) {
        return repository.findByUserEmail(email);
    }
}