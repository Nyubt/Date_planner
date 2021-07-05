package com.mycompany.dateplanner.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String email;
    private String password;
    private Boolean isSeller;
    private String imageUrl;

    public User() {
    }

    public User(String name, String email, String password, Boolean isSeller, String imageUrl) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isSeller = isSeller;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Boolean getSeller() {
        return isSeller;
    }

    public void setSeller(Boolean seller) {
        this.isSeller = seller;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ",name='" + name + "'" +
                ",email='" + email + "'" +
                ",isSeller='" + isSeller + "'" +
                ",imageUrl='" + imageUrl + "'" +
                "}";
    }
}
