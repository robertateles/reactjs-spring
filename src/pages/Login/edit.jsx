import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios';



function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');


    const editar = async (e) => {
        e.preventDefault();
        await axios.get(`http://localhost:8082/api/usuario/${id}`, {
            nome: nome,
            email: email,
            senha: senha
        }).then((result) => {
            alert("Usuário atualizado.")
            navigate("/Tabela")
        }).catch((erro) => {
            console.log(erro);
        })
    }

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
        <div>
            <section className="home" id="home">
                <div className="content">
                    <h3>Editar usuário</h3>
                </div>
            </section>
            <section className="form-container">
                <form>
                    <div className="inputbox">
                        <span>Nome:</span>
                        <input
                            value = {nome}
                            type="text"
                            placeholder="Digite seu nome"
                            name="nome"
                            onChange={(e) => setNome(e.target.value)} />
                        <span>Email:</span>
                        <input
                            value={email}
                            type="email"
                            placeholder="Digite seu email"
                            name="email"
                            onChange ={(e) => setEmail(e.target.value)} />
                        <span>Senha:</span>
                        <textarea 
                        value={senha}
                        name=""
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Digite sua senha"
                        onChange={(e) => setSenha(e.target.value)}></textarea>
                        <input
                            type="submit"
                            value="Enviar"
                            class="btn" 
                            onClick={editar}/>
                    </div>
                </form>
            </section>
        </div>

    )
}

export default Edit;