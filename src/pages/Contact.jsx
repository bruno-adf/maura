import React from 'react'
import Header from '../components/Header'
import './Contact.css'
import contato from '../img/contato.jpg'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Contact() {

    document.querySelectorAll('.once').forEach((e) => {
        e.classList.add('active');
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <div className='contact-container'>
            <Header linkA={'/maura/'} linkB={'/maura/info'} titleA={'Início'} titleB={'Informações'}></Header>
            <div className='main'>
                <div className='fadeRightOnce left'>
                    <h2 style={{'color':'var(--blueColor'}}>Algumas pessoas tem ansiedade, dúvida é até angústia antes de fazer uma sessão de coaching até que se surpreendem</h2>
                    <div className='divider'></div>
                    <p>Você deve estar cansado de constrangimento; covardia; culpa; decepção; depressão; derrota; desânimo; toda vez que alguém
                        te oferece alguma coisa, mas chegou a hora de abandonar e deixar tudo isso para trás, "A transformação que você terá é
                        grande com esse treinamento”, “O meu método lhe deixará inteligente, alegre e atraente, o meu método é mágico, Você ficará
                        mais confiante, quando terminar esse processo. A minha, sessão de coaching, lhe tornará mais capaz, e independente”, A
                        motivação é fundamental para você seguir o processo e ter resultado, este processo de coaching está mudando a vida dos meus
                        clientes, estou ensinando as pessoas com quem trabalhei, a se conhecerem e a se relacionarem, muitas pessoas inteligentes
                        compram o processo de coaching; Eu sei que você vai conseguir aplicar essas processo para ser mais persuasivo, você deve
                        estar pensando que meu processo de coaching é caro com tantos recursos que possui, mas não é, é quase de graça pelo tanto
                        que eu entrego.</p>
                    <br/><br/>
                    <h3>Venha fazer uma sessão gratuita e experimente um pouco de tudo o que eu entrego.</h3>
                    <br/><br/>
                    <Link to='https://pag.ae/7ZNoNRVEp'>
                        <button className='text-button'>Experimente agora</button>
                    </Link>
                    <br/><br/>
                    <p style={{'fontSize': '0.8rem'}}>*Condição para essa sessão gratuita, limitada a 5 porque eu só tenho esses horários vagos.</p>
                </div>
                <div className='fadeLeftOnce right'>
                    <img loading='lazy' decoding='async' className='image' src={contato} alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact