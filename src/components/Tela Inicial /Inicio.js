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
                <Link to="/game">
                    <button className='button-recall'>Iniciar Recall!</button>
                </Link>

            </div>
        </>
    );
}