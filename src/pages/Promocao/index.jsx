import React from "react";
import "./style.css";
import Rio from "../../assets/img/rio-de-janeiro.jpg";
import SP from "../../assets/img/sao-paulo.jpeg";
import Minas from "../../assets/img/minas-gerais.jpg";
import Fortaleza from "../../assets/img/fortaleza.jpg";
import Pernambuco from "../../assets/img/pernambuco.jpg";
import Salvador from "../../assets/img/salvador.jpg";
import Promcao from "../../assets/img/promocao.svg";

function Promocao() {
    return (
        <main>
            <section className="home" id="home">
                <div className="content">
                    <h3>Promoções</h3>
                    <p>Volte a sonhar com a sua próxima viagem. Encontre reservas flexíveis e os melhores preços para voos e pacotes.</p>
                </div>
                <div className="image">
                    <img src={Promcao} alt="" />
                </div>
            </section>
            <section className="promocao" id="promocao">
                <div className="container">
                    <div className="box">
                        <img src={Salvador} alt="" />
                        <div className="content">
                            <h4>Salvador</h4>
                            <p>Ida e Volta</p>
                            <span>R$139,99</span>
                            <div className="preco"> R$99,99</div>
                            <a href="#" className="btn">Comprar</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Pernambuco} alt="" />
                        <div className="content">
                            <h4>Pernambuco</h4>
                            <p>Ida e Volta</p>
                            <span>R$139,99</span>
                            <div className="preco">R$99,99</div>
                            <a href="#" className="btn">Comprar</a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Fortaleza} alt="" />
                        <div className="content">
                            <h4>Fortaleza</h4>
                            <p>Ida e Volta</p>
                            <span>R$139,99</span>
                            <div className="preco">R$99,99</div>
                            <a href="#" className="btn">Comprar</a>
                        </div>
                    </div>
                    <div className="container">
                        <div className="box">
                            <img src={SP} alt="" />
                            <div className="content">
                                <h4>São Paulo</h4>
                                <p>Ida e Volta</p>
                                <span>R$149,99</span>
                                <div className="preco">R$89,99</div>
                                <a href="#" className="btn">Comprar</a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={Minas} alt="" />
                            <div className="content">
                                <h4>Minas Gerais</h4>
                                <p>Ida e Volta</p>
                                <span>R$129,99</span>
                                <div className="preco">R$79,99</div>
                                <a href="#" className="btn">Comprar</a>
                            </div>
                        </div>
                        <div className="box">
                            <img src={Rio} alt="" />
                            <div className="content">
                                <h4>Rio de Janeiro</h4>
                                <p>Ida e Volta</p>
                                <span>R$139,99</span>
                                <div className="preco">R$89,99</div>
                                <a href="#" className="btn">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Promocao;