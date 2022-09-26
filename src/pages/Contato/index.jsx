import React from "react";
import Contact from "../../assets/img/contato.svg";
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [texto, setTexto] = useState("");
    const navigate = useNavigate();

    const saveComment = async (e) => {
        e.preventDefault();

        await axios
            .post("http://localhost:8082/api/contato", {
                nome: nome,
                email: email,
                texto: texto,
            })
            .then((result) => {
                alert("Comentário enviado.");
                navigate("/contato");
            })
            .catch((erro) => {
                alert(erro);
            })
    }

    return (
        <main>
            <section className="home" id="home">
                <div className="content">
                    <h3>Contato</h3>
                    <p>A TravelAirlines pela comunição.</p>
                </div>
                <div className="image">
                    <img src={Contact} alt="" />
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
                        <span>Motivo do contato:</span>
                        <textarea 
                        value={texto}
                        name=""
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder="Digite sua mensagem"
                        onChange={(e) => setTexto(e.target.value)}></textarea>
                        <input
                            type="submit"
                            value="Enviar"
                            class="btn" 
                            onClick={saveComment}/>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Contato;