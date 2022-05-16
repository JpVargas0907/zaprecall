import React from 'react'
import logo from '../../assets/_imgs/image 1.png';
import './inicio.css';
import { Link } from 'react-router-dom'

export default function Dash() {

    return (
        <>
            <div className="tela-inicial">
                <img className='logo-tela-inicial' src={logo} />
                <p className="titulo-logo">ZapRecall</p>
                <select placeholder='Escolha seu Deck' name="cars" id="cars">
                    <option value="react">React</option>
                    <option value="historia">História do Brasil</option>
                    <option value="naruto">Naruto</option>
                    <option value="futebol">Futebol</option>
                </select>
                <Link to="/game">
                    <button className='button-recall'>Iniciar Recall!</button>
                </Link>
            </div>
        </>
    );
}