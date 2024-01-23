import stylesProyectos from './proyectos.module.css'
import CodeIcon from '@mui/icons-material/Code';
import screenAromas from '../../img/aromasplcScreen.png'


const Proyectos = () => {
    return (
        <div className={stylesProyectos.container}>
            <div style={{ paddingTop: '3%'}}>
                <div className={stylesProyectos.title}>
                    <CodeIcon fontSize='large'/>
                    <h1>Proyectos</h1>
                    <CodeIcon fontSize='large'/>
                </div>
            </div>
            <div className={stylesProyectos.proyecto}>
                <h2>Aromas PLC</h2>
                <p>Proyecto realizado para un emprendimiento de difusores y velas aromatizantes. Este proyecto está desarrollado en React Js para el Front-End y Node Js con Express Js y MongoDB para el Back-End.</p>
                <div className={stylesProyectos.tecnologias}>
                    <a href="https://react.dev" target='blank'><img src='src/img/react-logo-48.png' alt="react js" title='React Js' /></a>
                    <a href="https://nodejs.org/en" target='blank'><img src="src/img/nodejs-logo-48.png" alt="node js" title='Node Js'/></a>
                    <a href="https://www.mongodb.com/es" target='blank'><img src="src/img/mongodb-logo-48.png" alt="mongodb" title='MongoDB'/></a>
                </div>
                <a href='https://aromasplc.vercel.app' target='blank'>
                    <div className={stylesProyectos.screen}>
                        <img style={{ backgroundImage: `url(${screenAromas})`, width: '100%', height: '100%'}} alt=""/>
                    </div>
                </a>
            </div>
            <div className={stylesProyectos.proyecto}>
                <h2>All New Style</h2>
                <p>Proyecto realizado para un curso de React Js de CoderHouse. Este proyecto está desarrollado en React Js para el Front-End y Firebase para simular el Back-End</p>
                <div className={stylesProyectos.tecnologias}>
                    <a href="https://react.dev" target='blank'><img src='src/img/react-logo-48.png' alt="react js" title='React Js' /></a>
                    <a href="https://firebase.google.com/?hl=es" target='blank'><img src="src/img/firebase-logo-48.png" alt="firebase" title='Firebase'/></a>
                </div>
                <a href='https://allnewstyle-five.vercel.app/' target='blank'>
                    <div className={stylesProyectos.screen}>
                        <img src="src/img/allnewstyleScreen.png" alt="" width='100%' height='100%' />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Proyectos