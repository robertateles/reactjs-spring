package com.service;

import java.util.List;

import com.model.entity.Contato;

public interface ContatoService {
	
  Contato salvar(Contato contato);
  
  List<Contato> getAllContatos();
  
  Contato getContatoById(long id);
}
