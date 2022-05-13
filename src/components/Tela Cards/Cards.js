import logoPequena from '../../assets/_imgs/logo.png'
import setinha from '../../assets/_imgs/setinha.png'
import './cards.css'


export default function Cards(){
    return (
        <div className="content">
            <Logo />
            <Card />
            <Card />
            <Card />
            <Card />
            <Footer />
        </div>
    );
}

function Logo(){
    return (
        <div className='logo'>
            <img src = {logoPequena}/>
            <p className="titulo-logo">ZapRecall</p>
        </div>
    );
}

function Card(){
    return(
        <div className='card'>
            <p>Pergunta 1</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <p>0/4 CONCLUÍDOS</p>
        </footer>
    );
}