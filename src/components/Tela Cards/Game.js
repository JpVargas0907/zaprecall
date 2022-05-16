import logoPequena from '../../assets/_imgs/logo.png'
import setinha from '../../assets/_imgs/setinha.png'
import party from '../../assets/_imgs/party.png'
import sad from '../../assets/_imgs/sad.png'
import './cards.css'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { Link } from 'react-router-dom'

export default function Game() {
    let [contador, setContador] = React.useState(0);
    let [ionFooter, setIonFooter] = React.useState([]);

    console.log(ionFooter);

    const flashCards = [
        {
            pergunta: 'O que é JSX?',
            resposta: 'Um JSX é uma sintaxe que permir com que eu escreva HTML no meu javascript'
        },
        {
            pergunta: 'O React é __',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            pergunta: 'Componentes devem iniciar com __',
            resposta: 'letra maiúscula'
        },
        {
            pergunta: 'Podemos colocar __ dentro do JSX',
            resposta: 'expressões'
        },
        {

            pergunta: ' O ReactDOM nos ajuda __',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            pergunta: 'Usamos o npm para __',
            resposta: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            pergunta: 'Usamos props para __?',
            resposta: ' passar diferentes informações para componentes '
        },
        {
            pergunta: 'Usamos estado (state) para __',
            resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        },
    ];

    const copyFlashCards = [...flashCards];
    embaralhar();

    function comparador() {
        return Math.random() - 0.5;
    }

    function embaralhar() {
        copyFlashCards.sort(comparador);
    }

    return (
        <div className="content">
            <Logo />
            <div className='deck-cards'>
                {copyFlashCards.map(
                    (card, index) => <Card key={index} id={index + 1} pergunta={card.pergunta} resposta={card.resposta} contador={contador} setContador={setContador} setIonFooter={setIonFooter} ionFooter={ionFooter} />
                )}
            </div>
            <Footer contador={contador} ionFooter={ionFooter} />
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
        props.setIonFooter([...props.ionFooter, "checkmark-circle-outline"]);
    }

    function userLateAnswer() {
        setClasseCard("card-late");
        setClasseCardResposta("none");
        setIonName("help-circle-outline");
        props.setContador(props.contador + 1);
        props.setIonFooter([...props.ionFooter, "help-circle-outline"]);
    }

    function userWrongAnswer() {
        setClasseCard("card-wrong");
        setClasseCardResposta("none");
        setIonName("close-circle-outline");
        props.setContador(props.contador + 1);
        props.setIonFooter([...props.ionFooter, "close-circle-outline"]);
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
    let [classeTexto, setClasseTexto] = React.useState("none");
    let [classeBotao, setClasseBotao] = React.useState("none");
    let [texto, setTexto] = React.useState("");
    let [img, setImg] = React.useState("");
    let [titulo, setTitulo] = React.useState("");

    console.log(props.ionFooter)
    console.log(props.ionFooter.length)

    function verificarResposta() {
        for (let i = 0; i < props.ionFooter.length; i++) {
            if (props.ionFooter[i] === "close-circle-outline") {
                console.log('retornou falso')
                return false;
            }
        }
        console.log('retornou verdadeiro')
        return true;

    }

    function verificarMensagem() {
        if (props.contador === 8 && verificarResposta() === true) {
            setImg(party);
            setTitulo("Parabéns!");
            setTexto("Você não esqueceu de nenhum flashcard!");
            setClasseTexto("texto");
            setClasseBotao("reiniciar-recall");
        } else if (props.contador === 8 && verificarResposta() === false) {
            setImg(sad);
            setTitulo("Putz...");
            setTexto("Ainda faltam alguns...Mas não desanime!");
            setClasseTexto("texto");
            setClasseBotao("reiniciar-recall");
        }
    }

    useEffect(() => {
        verificarMensagem();
    }, [props.contador]);

    return (
        <footer>
            <div className={classeTexto}>
                <div className='titulo'>
                    <img src={img} />
                    <p>{titulo}</p>
                </div>
                <p className='texto'>{texto}</p>
            </div>
            <p>{props.contador}/8 CONCLUÍDOS</p>
            <div className='icons'>
                {props.ionFooter.map((ionName, index) => <ion-icon key={index} name={ionName}></ion-icon>)}
            </div>

            <Link to="/">
                <button className={classeBotao}>REINICIAR RECALL</button>
            </Link>
        </footer>
    );
}