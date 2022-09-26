package com.exception;

public class RegraNegocio extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public RegraNegocio(String mensagem) {
		super(mensagem);
	}
}
