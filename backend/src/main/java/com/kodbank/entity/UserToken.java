package com.kodbank.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "user_token")
public class UserToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tid;

    @Column(nullable = false, unique = true, length = 512)
    private String token;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid", nullable = false)
    private Koduser koduser;

    @Column(nullable = false)
    private LocalDateTime expiry;

    public UserToken() {
    }

    public UserToken(String token, Koduser koduser, LocalDateTime expiry) {
        this.token = token;
        this.koduser = koduser;
        this.expiry = expiry;
    }

    public Long getTid() {
        return tid;
    }

    public void setTid(Long tid) {
        this.tid = tid;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Koduser getKoduser() {
        return koduser;
    }

    public void setKoduser(Koduser koduser) {
        this.koduser = koduser;
    }

    public LocalDateTime getExpiry() {
        return expiry;
    }

    public void setExpiry(LocalDateTime expiry) {
        this.expiry = expiry;
    }
}
