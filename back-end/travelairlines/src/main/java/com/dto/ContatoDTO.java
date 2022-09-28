package com.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ContatoDTO {

	private String nome;
	
	private String email;
	
	private String texto;
}
