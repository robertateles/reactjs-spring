package com.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UsuarioDTO {
	
	   //DTO - DATA TRANSFER OBJECT - TRANSFERENCIA DE DADOS
	
		private String nome;
		
		private String email;
		
		private String senha;

}
