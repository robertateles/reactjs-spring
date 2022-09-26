package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dto.UsuarioDTO;
import com.exception.ErroAutenticacao;
import com.exception.RegraNegocio;
import com.model.entity.Usuario;
import com.repositories.UsuarioRepository;
import com.service.UsuarioService;
import com.service.impl.UsuarioServiceImpl;
@CrossOrigin("*")
@RestController
@RequestMapping("api/usuario")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repositorio;

	@Autowired
	private UsuarioServiceImpl service;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping("/user")
	public String hello() {
		return "Olá!";
	}
	
	
	@PostMapping
	public ResponseEntity salvar(@RequestBody UsuarioDTO dto) {
		Usuario usuario = Usuario.builder().nome(dto.getNome())
				.email(dto.getEmail()).senha(dto.getSenha()).build();
		
		try {
			Usuario usuarioSalvo = service.salvarUsuario(usuario);
			return new ResponseEntity(usuarioSalvo, HttpStatus.CREATED);
		}catch(RegraNegocio e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	@PostMapping("/autenticar")
	public ResponseEntity autenticar(@RequestBody UsuarioDTO dto) {
		try {
			
			Usuario usuarioAutenticado = service.autenticar(dto.getEmail(), dto.getSenha());
			return ResponseEntity.ok(usuarioAutenticado);
		}catch(ErroAutenticacao e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	@GetMapping
	public ResponseEntity<List<Usuario>> findAll(){
		List<Usuario> usuarios = service.getAllUsuarios();
		return ResponseEntity.ok().body(usuarios);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable("id") long UsuarioId){
		return new ResponseEntity<Usuario>(service.getUsuarioById(UsuarioId), HttpStatus.OK);
	}
}
