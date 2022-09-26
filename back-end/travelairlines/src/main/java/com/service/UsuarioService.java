package com.service;


import java.util.List;

import com.model.entity.Usuario;


public interface UsuarioService {
    Usuario autenticar(String email, String senha);
	
	Usuario salvarUsuario(Usuario usuario);
	
	void validarEmail(String email);
	
	List<Usuario> getAllUsuarios();
	
	Usuario getUsuarioById(long id);
}
