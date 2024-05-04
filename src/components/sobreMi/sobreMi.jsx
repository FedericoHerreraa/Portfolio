import stylesSobreMi from './sobreMi.module.css'
import CodeIcon from '@mui/icons-material/Code';
import html from '../../img/html5-logo-72.png'
import css from '../../img/css3-logo-72.png'
import python from '../../img/python-logo-72.png'
import javascript from '../../img/javascript-logo-72.png'
import typescript from '../../img/typescript-logo-72.png'
import react from '../../img/react-logo-72.png'
import nodejs from '../../img/nodejs-logo-72.png'
import nestjs from '../../img/nestjs.svg'
import mongodb from '../../img/mongodb-logo-72.png'
import postgre from '../../img/postgresql-logo-72.png'
import java from '../../img/java-logo-72.png'
import graduation from '../../img/graduation-solid-36.png'


export default function SobreMi() {
    // const isMobile = () => window.innerWidth <= 768;

    return (
        <div className={stylesSobreMi.container}>
            <div className={stylesSobreMi.titulo}>
                <CodeIcon fontSize='large' />
                <h1>Sobre mi</h1>
                <CodeIcon fontSize='large' />
            </div>
            <div className={stylesSobreMi.info}>
                <div>
                    <p>Hola! Mi nombre es Federico Herrera, tengo 19 años y actualmente estoy en el segundo año de la lincenciatura en sistemas en la Universidad Argentina de la Empresa. Me apasiona el mundo IT pero especificamente la programación y es por eso que estoy constantemente aprendiendo nuevas teconologías. Tengo conocimientos en la programación web Front-End y Back-End, también en el diseño de algoritmos y en la arquitectura de Software. Actualmente soy desarrollador freelance trabajando desde la plataforma Workana.</p>
                </div>
                <div className={stylesSobreMi.infoContainer}>
                    <div className={stylesSobreMi.habilidades}>
                        <h2>Habilidades:</h2>
                        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
                            <a href="https://developer.mozilla.org/es/docs/Web/HTML"><img src={html} alt="" /></a>
                            <a href="https://developer.mozilla.org/es/docs/Web/CSS"><img src={css} alt="" /></a>
                            <a href="https://www.python.org"><img src={python} alt="" /></a>
                            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"><img src={javascript} alt="" /></a>
                            <a href="https://www.typescriptlang.org"><img src={typescript} alt="" /></a>
                            <a href="https://es.react.dev"><img src={react} alt="" /></a>
                            <a href="https://reactnative.dev"><img src={react} alt="" /></a>
                            <a href="https://nodejs.org/en"><img src={nodejs} alt="" /></a>
                            <a href="https://nestjs.com"><img src={nestjs} alt="" className={stylesSobreMi.img} /></a>
                            <a href="https://www.mongodb.com/es"><img src={mongodb} alt="" /></a>
                            <a href="https://www.postgresql.org"><img src={postgre} alt="" /></a>
                            <a href="https://www.java.com/es/"><img src={java} alt="" /></a>
                        </div>
                    </div>
                    <div className={stylesSobreMi.certificaciones}>
                        <h2>Certificaciones:</h2>
                        <div className={stylesSobreMi.listadoCertificaciones}>
                            <div className={stylesSobreMi.containerCert}>
                                <img src={graduation} alt="" />
                                <a href="https://drive.google.com/file/d/1XT1YyTBEaPoMPOFklC4zEz1n4DS5gQkI/view?usp=sharing" target='blank' style={{ color: '#c4c4c4' }}> Certificación de curso de HTML5 y CSS3 con Bootstrap.</a>
                            </div>
                            <div className={stylesSobreMi.containerCert}>
                                <img src={graduation} alt="" />                                
                                <a href="https://drive.google.com/file/d/1PPhAQjQGVKoO_EfYvlk8Ks1BbmbNTfZr/view?usp=sharing" target='blank' style={{ color: '#c4c4c4' }}>Certificación de curso de JavaScript en CoderHouse.</a>
                            </div>
                            <div className={stylesSobreMi.containerCert}>
                                <img src={graduation} alt="" />                                
                                <a href="https://drive.google.com/file/d/1-fSeKz0kmdljEVF10Iv5vX8ddn-d325Q/view?usp=sharing" target='blank' style={{ color: '#c4c4c4' }}>Certificación de curso de React Js en CoderHouse.</a>
                            </div>
                            <div className={stylesSobreMi.containerCert}>
                                <img src={graduation} alt="" />                                
                                <a href="https://drive.google.com/file/d/1O_9AC48k6yHeGvytymF8yfKwHkaTRaJc/view?usp=sharing" target='blank' style={{ color: '#c4c4c4' }}>Certificación de examen First Certificate en Cambridge.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
