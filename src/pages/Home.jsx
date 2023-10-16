import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import mountain from '../img/mountain.jpg'
import maura1 from '../img/photo1.jpg'
import maura2 from '../img/photo2.jpg'
import { MdEmail, MdWhatsapp } from 'react-icons/md'

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return (
        <div id="swup" className='home-container transition-fade'>
            <Header linkA={'/maura/contato'} linkB={'/maura/info'} titleA={'Contato'} titleB={'Informações'}></Header>
            <div className='hero'>
                <div className='hero-containerA fadeRightOnce'>
                    <h1 style={{ 'color': 'var(--blueColor)' }}>Maura Cristiani<br />de Moura</h1>
                    <div className='divider' />
                    <p>é <span className='bold'>farmacêutica</span>, formada pela Unesp, <span className='bold'>Mestre em
                        Imunologia</span> pela UEM, <span className='bold'>Especialista em Nutrição</span>,
                        <span className='bold'>Master Coach</span> formada pela Sociedade Internacional
                        do Mindset.<br /><br />
                        Bom, quero te dizer que, se eu pude fazer novas
                        escolhas e <span className='bold'>transformar</span> a minha
                        vida, é claro que <span className='bold'>você também pode</span>.<br /><br />
                        e é por isso que cá estou:</p>
                </div>
                <div className='hero-containerB'>
                    <img loading='lazy' decoding='async' className='fadeSW image' src={maura2} alt="" />
                    <div className='fadeNO outline'></div>
                </div>
            </div>
            <div className='about'>
                <div className='about-containerA'>
                    <img loading='lazy' decoding='async' className='image' src={mountain} alt="" />
                </div>
                <div className='about-containerB'>
                    <div className='animated fadeRight about-containerBA'>
                        <img loading='lazy' decoding='async' className=' image' src={maura1} alt="" />
                    </div>
                    <div className='animated fadeLeft about-containerBB'>
                        <h2>Um pouco sobre mim.<br /><br /></h2>
                        <p className='main-text indent'>   Mudei meus pensamentos negativos por pensamentos confiantes, me tornei
                            responsável pela minha própria vida e por tudo que eu havia criado até ali! Outra
                            crença forte em mim atualmente, é: “Nossos pensamentos criam nossa
                            realidade” Comecei a cuidar da minha alimentação, passei a meditar e a me
                            exercitar. Comprava e lia um livro (ou dois) por semana.<br /><br /></p>

                        <p className='main-text indent'>Mergulhei em cursos e
                            mais cursos sobre Mecânica Quântica, Neurociência, PNL, passei a identificar todas as crenças que estavam me limitando e a reprogramar cada uma delas!
                            Levava esse conhecimento para meus clientes em coaching, para minha família, para dentro de empresas e para pessoas em grupos virtuais que eu criava e
                            acompanhava, um a um, durante meses!<br /><br /></p>

                        <p className='main-text indent'>Tudo, absolutamente tudo que eu passei, foi extremamente necessário para
                            minha transformação como Ser Humano!
                            Hoje eu consigo olhar para O MEU PASSADO como o grande e maravilhoso
                            causador de quem Eu Sou! Escolhi ser a responsável pela minha vida! Escolhi e
                            escolho, todos os dias, quais pensamentos eu vou nutrir e quais eu vou cancelar!
                            Eu Sou a única responsável por tudo o que de melhor e pior acontece comigo!
                            Essa é a grande razão para as mudanças que aconteceram (e acontecem) na
                            minha vida!</p>
                        <div className='button-container'>
                            <Link to='http://wa.me/5516981106084'>
                                <button className='icon-button'>
                                    <MdWhatsapp color='white' size={'30px'} />
                                </button>
                            </Link>
                            <Link to={'/maura/info'}>
                                <button className='text-button'>Descubra mais</button>
                            </Link>
                            <a href="mailto:mastercoachmaura@gmail.com">
                                <button className='icon-button'>
                                    <MdEmail color='white' size={'30px'} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home