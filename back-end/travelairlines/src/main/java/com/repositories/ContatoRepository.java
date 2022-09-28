package com.repositories;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.entity.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {
	
	Optional<Contato> findByEmail(String email);
	
}
