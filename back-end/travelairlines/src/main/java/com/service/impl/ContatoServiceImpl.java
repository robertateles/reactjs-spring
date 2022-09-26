package com.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exception.ResourceNotFoundException;
import com.model.entity.Contato;
import com.repositories.ContatoRepository;
import com.service.ContatoService;

@Service
public class ContatoServiceImpl implements ContatoService{

	@Autowired
	private ContatoRepository contatoRepository;
	
	@Override
	@Transactional
	public Contato salvar(Contato contato) {
		return contatoRepository.save(contato);
	}

	@Override
	public List<Contato> getAllContatos() {
		return contatoRepository.findAll();
	}


	@Override
	public Contato getContatoById(long id) {
		
		return contatoRepository.findById(id).orElseThrow(() ->
		new ResourceNotFoundException("Contato", "id", id));
	}
	
}
