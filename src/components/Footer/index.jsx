import React from "react";
import './style.css'

function Footer() {
    return (
        <footer>
            <section className="rodape">
                <div className="container">
                    <div className="box">
                        <h4>Mais procurados</h4>
                        <a href="#"><i className="fas fa-map-marker-alt"> </i>Rio de Janeiro</a>
                        <a href="#"><i className="fas fa-map-marker-alt"></i>Minas Gerais</a>
                        <a href="#"><i className="fas fa-map-marker-alt"> </i>São Paulo</a>
                        <a href="#"><i className="fas fa-map-marker-alt"></i>Salvador</a>
                    </div>

                    <div className="box">
                        <h4>Páginas</h4>
                        <a><i className="fas fa-chevron-right"></i>Home</a>
                        <a><i className="fas fa-chevron-right"></i>Destino</a>
                        <a><i className="fas fa-chevron-right"></i>Promoção</a>
                        <a><i className="fas fa-chevron-right"></i>Contato</a>
                    </div>

                    <div className="box">
                        <h4>Contate-nos</h4>
                        <a href="#"><i className="fas fa-phone"></i>(21) 91111-2222</a>
                        <a href="#"><i className="fas fa-phone"></i>(21) 1111-2222</a>
                        <a href="#"><i className="fas fa-envelope"></i>travelairlines@email.com</a>
                        <a href="#"><i className="fas fa-map-marker-alt"></i>Praça Sen. Salgado Filho, s/n - Centro, Rio de Janeiro - RJ, 20021-340</a>
                    </div>
                </div>
                <div className="copyright">&copy; 2022 Copyright - Todos os direitos reservados. TravelAirlines Tecnologia</div>
            </section>
        </footer>
    )
}

export default Footer;