package com.mycompany.dateplanner.repo;

import com.mycompany.dateplanner.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product, Long> {
    Optional<Product> findProductById(Long id);

    void deleteProductById(Long id);
}
