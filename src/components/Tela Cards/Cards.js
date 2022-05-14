import logoPequena from '../../assets/_imgs/logo.png'
// import setinha from '../../assets/_imgs/setinha.png'
import './cards.css'


export default function Game() {
    return (
        <div className="content">
            <Logo />
            <Card />
            <Footer />
        </div>
    );
}

function Logo() {
    return (
        <div className='logo'>
            <img src={logoPequena} />
            <p className="titulo-logo">ZapRecall</p>
        </div>
    );
}

function Card() {
    let cards = ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4'];

    return (
        <>
            {cards.map(card =>
                <div className='card'>
                    <p>
                        {card}
                    </p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            )}
        </>

    );
}

function Footer() {
    return (
        <footer>
            <p>0/4 CONCLUÍDOS</p>
            <div className='icons'>
                <ion-icon name="checkmark-circle-outline"></ion-icon>
                <ion-icon name="help-circle-outline"></ion-icon>
                <ion-icon name="close-circle-outline"></ion-icon>
            </div>
        </footer>
    );
}