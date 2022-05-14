import logoPequena from '../../assets/_imgs/logo.png'
import setinha from '../../assets/_imgs/setinha.png'
import './cards.css'
import React from 'react'
import ReactState, {useState}  from 'react'


export default function Game() {
    const flashCards = [
        {
            pergunta: 'O que é JSX 18?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {
            pergunta: 'O que é JSX 20?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {
            pergunta: 'O que é JSX 30?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {
            pergunta: 'O que é JSX?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {

            pergunta: 'O que é JSX?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {
            pergunta: 'O que é JSX?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {
            pergunta: 'O que é JSX?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {
            pergunta: 'O que é JSX?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
    ];

    const copyFlashCards = [];

    for(let i = 0; i < flashCards.length; i++){
        copyFlashCards[i] = flashCards[i];
        embaralhar();
    }

    function comparador() {
        return Math.random() - 0.5;
    }

    function embaralhar() {
        copyFlashCards.sort(comparador);
        console.log(copyFlashCards);
    }

    return (
        <div className="content">
            <Logo />
            {copyFlashCards.map(
                (card, index) => <Card key = {index} id = {index + 1} pergunta = {card.pergunta} resposta = {card.resposta}/>
            )}
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

function Card(props) {
    let [classeCard, setClasseCard] = React.useState("card");
    let [classeCardPergunta, setClasseCardPergunta] = React.useState("none");
    let [classeCardResposta, setClasseCardResposta] = React.useState("none");
    
    function showQuestion(){
        setClasseCard("none");
        setClasseCardPergunta("card-pergunta");
    }

    function showAnswer(){
        setClasseCardPergunta("none");
        setClasseCardResposta("card-resposta");
    }

    return (
        <div>
            <div className={classeCard}>
                <p>
                    Pergunta {props.id}
                </p>
                <ion-icon onClick={showQuestion} name="play-outline"></ion-icon>
            </div>
            <div className={classeCardPergunta}>
                <p className='pergunta'>{props.pergunta}</p>
                <img onClick={showAnswer} src={setinha} />
            </div>
            <div className={classeCardResposta}>
                <p className='resposta'>{props.resposta}</p>
                <div className='buttons'>
                    <div className='errou'>
                        <p>Não lembrei</p>
                    </div>
                    <div className='quase-errou'>
                        <p>Quase não lembrei</p>
                    </div>
                    <div className='acertou'>
                        <p>Zap!</p>
                    </div>
                </div>
            </div>
        </div>
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