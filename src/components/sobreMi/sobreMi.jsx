import stylesSobreMi from './sobreMi.module.css'
import CodeIcon from '@mui/icons-material/Code';
import html from '../../img/html5-logo-24.png'
import css from '../../img/css3-logo-24.png'
import python from '../../img/python-logo-24.png'
import javascript from '../../img/javascript-logo-24.png'
import typescript from '../../img/typescript-logo-24.png'
import react from '../../img/react-logo-24.png'
import nodejs from '../../img/nodejs-logo-24.png'
import nestjs from '../../img/nestjs.svg'
import mongodb from '../../img/mongodb-logo-24.png'

export default function SobreMi() {
    const isMobile = () => window.innerWidth <= 768;

    return (
        <div className={stylesSobreMi.container}>
            <div className={stylesSobreMi.titulo}>
                <CodeIcon fontSize='large'/>
                <h1>Sobre mi</h1>
                <CodeIcon fontSize='large'/>
            </div>
            <div className={stylesSobreMi.info}>
                <div>
                    <p>Hola! Mi nombre es Federico Herrera, tengo 19 años y actualmente estoy en el segundo año de la lincenciatura en sistemas en la Universidad Argentina de la Empresa. Me apasiona la tencología y la programación y es por eso que estoy constantemente aprendiendo nuevas teconologías. Tengo conocimientos en la programación web Front-End y Back-End, también en el diseño de algoritmos y en la arquitectura de Software.</p>
                </div>
                <div className={stylesSobreMi.infoContainer}>
                    <div className={stylesSobreMi.habilidades}>
                        <h2>Habilidades:</h2>
                        <ul className={stylesSobreMi.listado}>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={html} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#912d26' }}>HTML5</p>
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={css} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#2a73a3' }}>CSS3</p>
                            </div>
                            <div className={stylesSobreMi.containerTec}>    
                                <img src={python} alt="" className={stylesSobreMi.img}/> 
                                <p style={{ color: '#b8b663' }}>Python</p>
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={javascript} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#bf802e' }}>JavaScript</p>                                
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={typescript} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#4673d4' }}>TypeScript</p>                                
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={react} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#2e799e' }}>React Js</p>                            
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={react} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#29658a' }}>React Native</p>                                
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={nodejs} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#39916c' }}>Node Js</p>                                
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={nestjs} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#b5291f' }}>Nest js</p>                                
                            </div>
                            <div className={stylesSobreMi.containerTec}>
                                <img src={mongodb} alt="" className={stylesSobreMi.img}/>
                                <p style={{ color: '#2cb06e' }}>MongoDB</p>
                            </div>
                        </ul>
                    </div>
                    <div className={stylesSobreMi.certificaciones}>
                        <h2>Certificaciones:</h2>
                        <div className={stylesSobreMi.listadoCertificaciones}>
                            <div className={stylesSobreMi.containerCert}>
                                <div className={isMobile() ? stylesSobreMi.imgCertMobile : stylesSobreMi.imgCert}></div>
                                <a href="https://drive.google.com/file/d/1XT1YyTBEaPoMPOFklC4zEz1n4DS5gQkI/view?usp=sharing" target='blank' style={{ color: '#c4c4c4'}}> Certificación de curso de HTML5 y CSS3 con Bootstrap.</a>
                            </div>
                            <div className={stylesSobreMi.containerCert}>
                                <div className={isMobile() ? stylesSobreMi.imgCertMobile : stylesSobreMi.imgCert}></div>
                                <a href="https://drive.google.com/file/d/1PPhAQjQGVKoO_EfYvlk8Ks1BbmbNTfZr/view?usp=sharing" target='blank' style={{ color: '#c4c4c4'}}>Certificación de curso de JavaScript en CoderHouse.</a>
                            </div>
                            <div className={stylesSobreMi.containerCert}>
                                <div className={isMobile() ? stylesSobreMi.imgCertMobile : stylesSobreMi.imgCert}></div>   
                                <a href="https://drive.google.com/file/d/1-fSeKz0kmdljEVF10Iv5vX8ddn-d325Q/view?usp=sharing" target='blank' style={{ color: '#c4c4c4'}}>Certificación de curso de React Js en CoderHouse.</a>
                            </div>
                            <div className={stylesSobreMi.containerCert}>
                                <div className={isMobile() ? stylesSobreMi.imgCertMobile : stylesSobreMi.imgCert}></div>
                                <a href="https://drive.google.com/file/d/1O_9AC48k6yHeGvytymF8yfKwHkaTRaJc/view?usp=sharing" target='blank' style={{ color: '#c4c4c4'}}>Certificación de examen First Certificate en Cambridge.</a>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
