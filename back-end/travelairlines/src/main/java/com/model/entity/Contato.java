package com.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "contato")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Contato {
	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	@Column
	private Long id;
	
	@Column
	private String nome;
	
	@Column
	private String email;
	
	@Column
	private String texto;
}
