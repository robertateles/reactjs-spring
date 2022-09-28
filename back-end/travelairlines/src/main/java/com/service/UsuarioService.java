package com.service;


import java.util.List;
import java.util.Optional;

import com.model.entity.Usuario;


public interface UsuarioService {
    Usuario autenticar(String email, String senha);
	
	Usuario salvarUsuario(Usuario usuario);
	
	void validarEmail(String email);
	
	List<Usuario> getAllUsuarios();
	
	Usuario getUsuarioById(long id);
	
	Optional<Usuario> buscarPorId(Long id);
	
    Usuario atualizar(Usuario usuario, long id);
	
	void deletar(Usuario usuario);
}
