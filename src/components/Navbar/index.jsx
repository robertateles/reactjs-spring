import React from "react";
import './style.css';
import {Link} from 'react-router-dom';

const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


function Navbar() {
    
    return (
        <header>
            <div id="menu-bar" className="fas fa-bars"></div>

            <a className="logo"><i className="fas fa-paper-plane"> <Link to={"/home"}>TravelAirlines</Link></i></a>

            <nav className="navbar">
                <a> <Link to={"/home"}>Home</Link></a>
                <a><Link to={"/destino"}>Destino</Link></a>
                <a><Link to={"promocao"}>Promoções</Link></a>
                <a><Link to={"/contato"}>Contato</Link></a>
            </nav>
            <div className="icons">
                <i className="fas fa-search" id="search"></i>
                <Link to={"/login"}><i className="fas fa-user"></i></Link>
            </div>
            
        </header>
    )
}

export default Navbar;