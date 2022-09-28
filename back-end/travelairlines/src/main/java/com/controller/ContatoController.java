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

import com.model.entity.Contato;
import com.repositories.ContatoRepository;
import com.service.ContatoService;
import com.service.impl.ContatoServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("api/contato")
public class ContatoController {

	@Autowired
	private ContatoRepository repository;
	
	@Autowired
	private ContatoServiceImpl service;
	
	@Autowired
	private ContatoService contatoService;
	
	@PostMapping
	public ResponseEntity salvar(@RequestBody Contato contato) {
		return new ResponseEntity<Contato>(service.salvar(contato), HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Contato>> findAll(){
		List<Contato> contatos = service.getAllContatos();
		return ResponseEntity.ok().body(contatos);
	}
		
	@GetMapping("{id}")
	public ResponseEntity<Contato> getContatoById(@PathVariable("id") long ContatoId){
		return new ResponseEntity<Contato>(service.getContatoById(ContatoId), HttpStatus.OK);
	}
}
