import React, { useEffect } from 'react'
import Header from '../components/Header'
import eye from '../img/eye.png'
import aspas from '../img/aspas.png'
import left from '../img/left.jpg'
import right from '../img/right.jpg'
import { Link } from 'react-router-dom'
import './Info.css'
import { MdEmail, MdWhatsapp } from 'react-icons/md'
import Footer from '../components/Footer'

function Info() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

  return (
    <div className='info-container'>
        <Header linkA={'/maura/'} linkB={'/maura/contato'} titleA={'Início'} titleB={'Contato'}></Header>
        <div className='hero'>
            <div className='text  animated fadeLeftOnce'>
                <h2 style={{'color':'var(--blueColor)'}}>Quero te convidar a fazer um mergulho comigo</h2>
                <div className='divider'></div>
                <p>
                    num método que eu criei depois de anos de estudos, testes, tentativas, erros e acertos! Esse
                    método, além da minha própria história e das minhas experiências tem como
                    base a minha formação em Farmácia, meus estudos em Neurociência e
                    Programação Neurolinguística e as minhas práticas de Mecânica Quântica! Tudo
                    isso para que você transforme as crenças limitantes que estão afetando sua
                    autoconfiança, em crenças de realização e conquistas!
                </p>
            </div>
            <img loading='lazy' decoding='async' className='image animated fadeUpOnce' src={eye} alt="" />
        </div>
        <div className='second'>
            <h2 style={{'alignSelf': 'start'}}>Nossas crenças limitantes afetam nossa<br/>autoconfiança em todas as áreas da nossa vida!</h2>
            <div className='paragraph-container'>
                <p className='animated fadeRight paragraph'>Se eu não confio em mim, não sou capaz de confiar em mais ninguém!
                Se eu não confio em mais ninguém, como vou me relacionar em família, com um
                grande amor, ter amigos, passar por uma entrevista de emprego, um concurso
                público, pedir um aumento no trabalho ou fazer alguma apresentação na
                faculdade, por exemplo?<br/><br/>

                Se não confiamos em nós mesmos ou no outro e, portanto, perdemos
                oportunidades, todas as áreas da nossa vida serão afetadas!
                A construção de um método, do meu método (que eu vou te contar aqui nesse
                post) começou quando eu percebi que, logo após eu, dar aulas, palestras, ou até depois de conversas informais, as pessoas me diziam quase a mesma coisa:
                “Estou me sentindo muito melhor, Maura”, “Estou mais confiante”, “Agora eu
                quero conquistar o mundo!”, “Passei a olhar para mim e para minha vida de outra
                maneira” , “Tomei uma decisão que há anos eu adiava”.
                E por aí vai!
                </p>
                <p className='animated fadeLeft paragraph'>
                Percebendo os resultados dessas pessoas que eu acompanhei de perto, somado
                às minhas experiências e história, foi que eu estruturei um método para
                reprogramar as minhas e as crenças limitantes das pessoas que precisavam
                mudar seus pensamentos e comportamentos!
                Nós somos o que pensamos! Essa é a minha mais forte crença!<br/><br/>

                Logo que eu saí da indústria, como celetista, em 2013, eu acreditava ser incapaz
                de empreender, de ter dinheiro, de construir uma família, de ser saudável e ter
                qualidade de vida!
                Eu acreditava que o meu passado - que eu te contarei mais à frente- havia me
                condenado! Que eu era uma vítima, que tudo e todos estavam contra mim, e que eu não era merecedora de ser feliz de verdade! Que todos tinham possibilidades, sucesso,
                prosperidade, saúde, menos eu! Eu repetia pra mim mesma e para outras
                pessoas das minhas relações: “Eu não posso” “Eu não consigo” “Eu não mereço”
                </p>
            </div>
            <h2>Você tem algum desses pensamentos?</h2>
            <div className='card-container'>
                <div className='card animated fadeUp' style={{'marginRight':'10px'}}>
                    <img className='aspasA' src={aspas} alt="" />
                    <p>Não posso sair desse emprego, não posso fazer mais, não posso falar o que penso, não
                    posso fazer diferente, não posso começar um curso novo, não posso deixar meus filhos,
                    não posso encontrar um amor, não posso parar de tomar remédios...</p>
                    <img className='aspasB' src={aspas} alt="" />
                </div>
                <div className='card animated fadeUp'>
                    <img className='aspasA' src={aspas} alt="" />
                    <p>Não consigo aprender isso, não consigo fazer melhor, não consigo sair das dívidas, não
                    consigo me expressar, não consigo vender, não consigo ter mais tempo, não consigo me
                    exercitar, não consigo ser...
                    </p>
                    <img className='aspasB' src={aspas} alt="" />
                </div>
                <div className='card animated fadeUp' style={{'marginLeft':'10px'}}>
                    <img className='aspasA' src={aspas} alt="" />
                    <p>Não mereço ter dinheiro, não mereço perdão, não mereço coisas boas nessa vida, não
                    mereço um amor, não mereço ser saudável, não mereço reconhecimento...</p>
                    <img className='aspasB' src={aspas} alt="" />
                </div>
            </div>
        </div>
        <div className='third'>
            <img loading='lazy' decoding='async' className='left animated fadeRight' src={left} alt="" />
            <div className='text'>
                <div className='content animated fadeUp'>
                    <h2>Foi somente depois que eu consegui estruturar um PASSO A PASSO de
                    diagnóstico e reprogramação das minhas próprias crenças, que tudo mudou!</h2>
                    <br/><br/>
                    <p>
                    Passei a trabalhar muito (porque eu AMO o que faço), a ajudar mais pessoas, a falar mais “nãos”, a ter tempo de qualidade com minha família, a ter dinheiro, a
                    cuidar do meu corpo, a ter saúde, a acordar cinco horas da manhã (ou menos)
                    disposta a realizar, e a parar de tomar vários antidepressivos por dia!
                    <br/><br/>
                    Imagine você também tendo TUDO o que PODE e MERECE ter! Imagine
                    conquistando um amor para a vida toda, construindo sua família, viajando, trabalhando muito com algo que faz o seu coração vibrar, ter dinheiro (porque
                    não é errado ter dinheiro), e ser FELIZ! Eu sei que pode parecer algo distante, um sonho de longo prazo, mas acredite em mim: se eu consegui você também PODE
                    E MERECE!
                    <br/><br/>
                    Faça o seu processo de coaching comigo e eu vou te entregar o meu método, mas
                    preciso que você coloque em prática os 4 passos! Só assim, as crenças que te limitam poderão ser reprogramadas!
                    </p>
                    <div className='button-container'>
                        <Link to='http://wa.me/5516981106084'>
                            <button className='icon-button'>
                                <MdWhatsapp color='white' size={'30px'}/>
                            </button>
                        </Link>
                        <Link to='https://pag.ae/7ZNoNRVEp'>
                            <button className='text-button'>Reprograme sua mente</button>
                        </Link>
                        <a href='mailto:mastercoachmaura@gmail.com'>
                            <button className='icon-button'>
                                <MdEmail color='white' size={'30px'}/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <img loading='lazy' decoding='async' className='right animated fadeLeft' src={right} alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Info