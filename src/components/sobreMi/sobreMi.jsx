import stylesSobreMi from './sobreMi.module.css'
import CodeIcon from '@mui/icons-material/Code';

const SobreMi = () => {
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
                            <li style={{ color: '#912d26' }}>HTML5</li>
                            <li style={{ color: '#2a73a3' }}>CSS3</li>
                            <li style={{ color: '#b8b663' }}>Python</li>
                            <li style={{ color: '#bf802e' }}>JavaScript</li>
                            <li style={{ color: '#4673d4' }}>TypeScript</li>
                            <li style={{ color: '#2e799e' }}>React Js</li>
                            <li style={{ color: '#29658a' }}>React Native</li>
                            <li style={{ color: '#39916c' }}>Node Js</li>
                            <li style={{ color: '#9c6c35' }}>SQL</li>
                            <li style={{ color: '#2cb06e' }}>MongoDB</li>
                        </ul>
                    </div>
                    <div className={stylesSobreMi.certificaciones}>
                        <h2>Certificaciones:</h2>
                        <ul className={stylesSobreMi.listadoCertificaciones}>
                            <a href="https://drive.google.com/file/d/1XT1YyTBEaPoMPOFklC4zEz1n4DS5gQkI/view?usp=sharing" target='blank'><li style={{ color: '#c4c4c4'}}>Certificación de curso de Aprende Programando de HTML5 y CSS3 con Bootstrap.</li></a>
                            <a href="https://drive.google.com/file/d/1PPhAQjQGVKoO_EfYvlk8Ks1BbmbNTfZr/view?usp=sharing" target='blank'><li style={{ color: '#c4c4c4'}}>Certificación de curso de JavaScript en CoderHouse.</li></a>
                            <a href="https://drive.google.com/file/d/1-fSeKz0kmdljEVF10Iv5vX8ddn-d325Q/view?usp=sharing" target='blank'><li style={{ color: '#c4c4c4'}}>Certificación de curso de React Js en CoderHouse.</li></a>
                            <a href="https://drive.google.com/file/d/1O_9AC48k6yHeGvytymF8yfKwHkaTRaJc/view?usp=sharing" target='blank'><li style={{ color: '#c4c4c4'}}>Certificación de examen First Certificate en Cambridge.</li></a>   
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;