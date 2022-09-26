import React from "react";
import './style.css'
import Foto from '../../assets/img/home.svg'
import Cliente1 from '../../assets/img/6.png';
import Cliente2 from '../../assets/img/5.png';
import Cliente3 from '../../assets/img/4.png';

function Home() {
    return (
     <div>
        <section className="home" id="home">
            <div className="image">
                <img  src={Foto} alt=""/>
            </div>
            
            <div className="content">
                <h3>Viagens de ônibus e avião mais baratas</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nostrum ut molestiae adipisci incidunt deleniti quisquam amet itaque nisi! Quos delectus aliquam incidunt esse vero tempora, sint impedit exercitationem molestias!</p>
                <a href="/" className="btn">conheça mais</a>
            </div>
        </section>

        <section className="form-container">
            <form action="">
                <div className="inputbox"> 
                    <span>Saindo de:</span>
                    <input type="text" placeholder="Digite uma cidade"/>
                </div>
                <div className="inputbox"> 
                    <span>Indo para:</span>
                    <input type="text" placeholder="Digite uma cidade"/>
                </div>
                <div className="inputbox"> 
                    <span>Data de ida:</span>
                    <input type="date" placeholder="Digite uma cidade"/>
                </div>
                <input type="submit" value="Compra agora" className="btn"/>
            </form>
        </section>

        <section>
            <h1 className="avaliacoes">Avaliações</h1>
            <div className="row1">
                <div className="card">
                    <img src={Cliente1} className="avaliacao" alt=""/>
                    <h1 className="cabecalho">Clara Silva</h1>
                    <h3 className="text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptatum, ab ex nisi aliquid consequuntur saepe."</h3>
                  </div>

               <div className="card">
                  <img src={Cliente2} className="avaliacao" alt=""/>
                  <h1 className="cabecalho">Luiz Fernandes</h1>
                  <h3 className="text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptatum, ab ex nisi aliquid consequuntur saepe."</h3>
                </div>

               <div className="card">
                  <img src={Cliente3} className="avaliacao" alt=""/>
                  <h1 className="cabecalho">Nina Ferreira</h1>
                  <h3 className="text">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam voluptatum, ab ex nisi aliquid consequuntur saepe."</h3>    
                </div>
           </div>
        </section>

     </div>   
    )
}

export default Home;