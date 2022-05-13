import logo from '../../assets/_imgs/image 1.png';
import './inicio.css';

export default function Inicio() {
    return (
        <>
            <div className='tela-inicial'>
                <img className='logo-tela-inicial' src={logo} />
                <p className="titulo-logo">ZapRecall</p>
                <button className='button-recall'>Iniciar Recall!</button>
            </div>
        </>
    );
}