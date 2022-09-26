import React from "react";
import './style.css';
import Foto from '../../assets/img/rio-de-janeiro.svg';

function Destino(){
    return(
        <div>
            <section className="home" id="home">
            <div className="content">
                <h3>Destino</h3>
                <p>Volte a sonhar com a sua próxima viagem. Encontre reservas flexíveis e os melhores preços para voos e pacotes.</p>
            </div>
            <div className="image">
                <img src={Foto} alt="" />
            </div>
        </section>
        <section className="form-container">
            <form >
                <div className="inputbox">
                    <span>Saindo de:</span>
                    <input type="text"placeholder="Digite uma cidade" required />
                </div>
                <div className="inputbox">
                    <span>Indo para:</span>
                    <input type="text"placeholder="Digite uma cidade" required />
                </div>
                <div className="inputbox">
                    <span>Data de ida:</span>
                    <input type="date"placeholder="Digite uma data" required />
                </div>
                <input type="submit" value="Comprar agora" className="btn" />
            </form>
        </section>
        </div>
    )
}

export default Destino;