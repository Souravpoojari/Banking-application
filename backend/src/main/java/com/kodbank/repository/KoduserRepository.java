package com.kodbank.repository;

import com.kodbank.entity.Koduser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KoduserRepository extends JpaRepository<Koduser, Long> {
    Optional<Koduser> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
