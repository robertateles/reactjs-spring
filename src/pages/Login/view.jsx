import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Promocao/style.css';

export default function View() {

    const { id } = useParams();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        carregarUsuario();

    }, [])

    const carregarUsuario = async () => {
        const result = await axios.get(`http://localhost:8082/api/usuario/${id}`)
        setNome(result.data.nome)
        setSenha(result.data.senha)
        setEmail(result.data.email)
    }

    return (
        <div className="container1 home">
            <div className="box1">
                <div className="content1">
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">ID: {id}</h5>
                        <p className="card-title"><b>Nome</b> {nome} </p>
                        <p className="card-title"><b>Senha</b> {senha} </p>
                        <p className="card-title"><b>Email</b> {email} </p>
                        <Link to="/Tabela" type="button" className="btn btn-outline-success">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}