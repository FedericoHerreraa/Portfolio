import stylesProyectos from './proyectos.module.css'
import CodeIcon from '@mui/icons-material/Code';


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
                    <a href="https://react.dev" target='blank' style={{ width: '12%', height: 'auto'}}><div className={stylesProyectos.reactLogo}></div></a>
                    <a href="https://nodejs.org/en" target='blank' style={{ width: '12%', height: 'auto'}}><div className={stylesProyectos.nodejsLogo}></div></a>
                    <a href="https://www.mongodb.com/es" target='blank' style={{ width: '12%', height: 'auto'}}><div className={stylesProyectos.mongodbLogo}></div></a>
                </div>
                <a href='https://aromasplc.vercel.app' target='blank'>
                    <div className={stylesProyectos.screen}>
                        <div className={stylesProyectos.screenAromas}></div>
                    </div>
                </a>
            </div>
            <div className={stylesProyectos.proyecto}>
                <h2>All New Style</h2>
                <p>Proyecto realizado para un curso de React Js de CoderHouse. Este proyecto está desarrollado en React Js para el Front-End y Firebase para simular el Back-End</p>
                <div className={stylesProyectos.tecnologias}>
                <a href="https://react.dev" target='blank' style={{ width: '12%', height: 'auto'}}><div className={stylesProyectos.reactLogo}></div></a>
                    <a href="https://firebase.google.com/?hl=es" target='blank' style={{ width: '12%', height: 'auto'}}><div className={stylesProyectos.firebaseLogo}></div></a>
                </div>
                <a href='https://allnewstyle-five.vercel.app/' target='blank'>
                    <div className={stylesProyectos.screen}>
                        <div className={stylesProyectos.screenAllNew}></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Proyectos