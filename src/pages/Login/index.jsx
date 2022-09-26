import React from "react";
import "./style.css";
import Logo from "../../assets/img/login.svg";
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

//axios

function Login() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const cadastrar = async (e) =>{
        e.preventDefault();

        await axios
        .post("http://localhost:8082/api/usuario",{
            nome : nome,
            email : email,
            senha : senha,
        })
        .then((result) =>{
            alert("Usuário cadastrado.");
            navigate("/home");
        })
        .catch((erro) =>{
            console.log(erro);
        })
    }

    return (
        <div className="main-login ">
            <div className="left-login">
                <h1>Cadastra-se</h1>
                <img src={Logo} alt="animação" className="left-image" />
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>Cadastrar</h1>
                    <div className="textfield">
                        <h3>Nome:</h3>
                        <input
                         value={nome}
                         type="text"
                         name="nome" 
                         id="" 
                         placeholder="Nome" required
                         onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="textfield">
                        <h3>Email:</h3>
                        <input 
                        value={email}
                        type="email" 
                        name="email" 
                        id="" 
                        placeholder="Email" required
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="textfield">
                        <h3>Senha</h3>
                        <input 
                        value={senha}
                        type="password" 
                        name="senha" 
                        id="" 
                        placeholder="Senha"required
                        onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <button className="btn-login" onClick={cadastrar}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default Login;