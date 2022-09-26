import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destino from './pages/Destino';
import Promocao from './pages/Promocao';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Footer from './components/Footer';


export default function Rotas() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/destino' element={<Destino/>}/>
            <Route path='/promocao' element={<Promocao/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/login' element={<Login/>}/>

        </Routes>
        <Footer/>
    </Router>
  )
}