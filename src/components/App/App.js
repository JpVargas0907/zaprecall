import React from 'react'
import '../../assets/styles/styles.css';
import '../../assets/styles/reset.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from '../Tela Cards/Game';
import Dash from '../Tela Inicial /Inicio';

export default function App(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dash />}/>
                <Route path="/game" element={ <Game />}/>
            </Routes>
        </BrowserRouter>
    );
}