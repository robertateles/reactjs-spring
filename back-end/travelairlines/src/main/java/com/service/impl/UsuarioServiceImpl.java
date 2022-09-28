package com.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exception.ErroAutenticacao;
import com.exception.RegraNegocio;
import com.exception.ResourceNotFoundException;
import com.model.entity.Usuario;
import com.repositories.UsuarioRepository;
import com.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository repositorio;


	@Override
	public Usuario autenticar(String email, String senha) {
		Optional<Usuario> usuario = repositorio.findByEmail(email);
		
		if(!usuario.isPresent()) {
			throw new ErroAutenticacao("Usuário não encontrado");
		}
		
		if(!usuario.get().getSenha().equals(senha)) {
			throw new ErroAutenticacao("Senha incorreta.");
		}
		
		return usuario.get();
	}

	@Override
	@Transactional // usa quando tem manipulação no banco de dados
	public Usuario salvarUsuario(Usuario usuario) {
		validarEmail(usuario.getEmail());
		return repositorio.save(usuario);
	}

	@Override
	public void validarEmail(String email) {
		boolean existe = repositorio.existsByEmail(email);
		if(existe) {
			throw new RegraNegocio("Já existe usuário cadastrado");
		}
	}

	@Override
	public List<Usuario> getAllUsuarios() {
		return repositorio.findAll();
	}

	@Override
	public Usuario getUsuarioById(long id) {
		return repositorio.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException("Usuario", "id", id));
	}

	@Override
	public Optional<Usuario> buscarPorId(Long id) {
		return repositorio.findById(id);
	}


	@Override
	@Transactional
	public void deletar(Usuario usuario) {
		Objects.requireNonNull(usuario.getId());
		repositorio.delete(usuario);
	}

	@Override
	@Transactional
	public Usuario atualizar(Usuario usuario, long id) {
		Usuario usuarioExistente = repositorio.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Funcionario", "id", id));
		
		usuarioExistente.setNome(usuario.getNome());
		usuarioExistente.setEmail(usuario.getEmail());
		usuarioExistente.setSenha(usuario.getSenha());

		repositorio.save(usuarioExistente);
		return usuarioExistente;
	}



	

}
