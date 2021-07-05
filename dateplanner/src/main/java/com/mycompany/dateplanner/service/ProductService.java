package com.mycompany.dateplanner.service;

import com.mycompany.dateplanner.exception.RecordNotFoundException;
import com.mycompany.dateplanner.model.Product;
import com.mycompany.dateplanner.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepo productRepo;

    @Autowired
    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public Product addProduct(Product product, User user) {
        product.setUserId(user.getId());
        return productRepo.save(product);
    }

    public Product updateProduct(Product product) {
        return productRepo.save(product);
    }

    public void deleteProduct(Long id) {
        productRepo.deleteProductById(id);
    }

    public List<Product> findAllUsers() {
        return productRepo.findAll();
    }

    public Product findProductById(Long id) {
        return productRepo.findProductById(id)
                .orElseThrow(() -> new RecordNotFoundException("Product by id " + id + " not found"));
    }
}
