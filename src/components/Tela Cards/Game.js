import logoPequena from '../../assets/_imgs/logo.png'
import setinha from '../../assets/_imgs/setinha.png'
import './cards.css'
import React, { useState } from 'react'


export default function Game() {
    let [contador, setContador] = React.useState(0);

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

    const copyFlashCards = [...flashCards];
    embaralhar();

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
            <div className='deck-cards'>
                {copyFlashCards.map(
                    (card, index) => <Card key={index} id={index + 1} pergunta={card.pergunta} resposta={card.resposta} contador={contador} setContador={setContador} />
                )}
            </div>
            <Footer contador={contador} />
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
    let [ionName, setIonName] = React.useState("play-outline");

    function showQuestion() {
        setClasseCard("none");
        setClasseCardPergunta("card-pergunta");
    }

    function showAnswer() {
        setClasseCardPergunta("none");
        setClasseCardResposta("card-resposta");
    }

    function userZapAnswer() {
        setClasseCard("card-zap");
        setClasseCardResposta("none");
        setIonName("checkmark-circle-outline");
        props.setContador(props.contador + 1);
    }

    function userLateAnswer() {
        setClasseCard("card-late");
        setClasseCardResposta("none");
        setIonName("help-circle-outline");
        props.setContador(props.contador + 1);
    }

    function userWrongAnswer() {
        setClasseCard("card-wrong");
        setClasseCardResposta("none");
        setIonName("close-circle-outline");
        props.setContador(props.contador + 1);
    }

    return (
        <div>
            <div className={classeCard}>
                <p>
                    Pergunta {props.id}
                </p>
                <ion-icon onClick={showQuestion} name={ionName}></ion-icon>
            </div>
            <div className={classeCardPergunta}>
                <p className='pergunta'>{props.pergunta}</p>
                <img onClick={showAnswer} src={setinha} />
            </div>
            <div className={classeCardResposta}>
                <p className='resposta'>{props.resposta}</p>
                <div className='buttons'>
                    <div onClick={userWrongAnswer} className='errou'>
                        <p>Não lembrei</p>
                    </div>
                    <div onClick={userLateAnswer} className='quase-errou'>
                        <p>Quase não lembrei</p>
                    </div>
                    <div onClick={userZapAnswer} className='acertou'>
                        <p>Zap!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer(props) {
    return (
        <footer>
            <p>{props.contador}/8 CONCLUÍDOS</p>
            <div className='icons'>
            </div>
        </footer>
    );
}