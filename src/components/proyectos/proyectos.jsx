import stylesProyectos from './proyectos.module.css'
import CodeIcon from '@mui/icons-material/Code';
import javascript from '../../img/javascript-logo-48.png'
import react from '../../img/react-logo-48.png'
import nodejs from '../../img/nodejs-logo-48.png'
import mongodb from '../../img/mongodb-logo-48.png'
import firebase from '../../img/firebase-logo-48.png'
import aromasplc from '../../img/aromasplcScreen.png'
import allnewstyle from '../../img/allnewstyleScreen.png'
import typescript from '../../img/typescript-logo-48.png'
import jardin from '../../img/jardinScreen.png'
import loginImg from '../../img/loginImg.jpg'
import taskImg from '../../img/tasksImg.jpg'
import createTaskImg from '../../img/createTaskImg.jpg'
import profileImg from '../../img/profileImg.jpg'
import nestjs from '../../img/nestjs.svg'
import allnewStyleMob from '../../img/allnewScreenMob.png'
import aromasScreenMob from '../../img/aromasScreenMob.jpg'
import jardinScreenMob from '../../img/jardinScreenMob.jpg'

export default function Proyectos() {
    const isMobile = () => window.innerWidth <= 768;

    return (
        <div className={stylesProyectos.container}>
            <div style={{ paddingTop: '3%' }}>
                <div className={stylesProyectos.title}>
                    <CodeIcon fontSize='large' />
                    <h1>Proyectos</h1>
                    <CodeIcon fontSize='large' />
                </div>
            </div>
            <div className={stylesProyectos.proyecto}>
                <h2>Aromas PLC</h2>
                <p>Proyecto realizado para un emprendimiento de difusores y velas aromatizantes. Se buscó un diseño adaptativo que vaya con el estilos de los difusores de ambiente creando una combinación de colores unica. Esta pagina te permite realizar compras y enviar consultas para que lleguen al mail. Este proyecto está desarrollado en React Js + Javascript para el Front-End y Node Js con Express Js y MongoDB para el Back-End. Para el despliegue se utilizo Vercel, Render y MongoDb atlas.</p>
                <div className={stylesProyectos.tecnologias}>
                    <a href="https://devdocs.io/javascript/" target='blank' style={{ width: '12%', height: 'auto' }}><img src={javascript} className={stylesProyectos.logo} /></a>
                    <a href="https://react.dev" target='blank' style={{ width: '12%', height: 'auto' }}><img src={react} className={stylesProyectos.logo} /></a>
                    <a href="https://nodejs.org/en" target='blank' style={{ width: '12%', height: 'auto' }}><img src={nodejs} className={stylesProyectos.logo} /></a>
                    <a href="https://www.mongodb.com/es" target='blank' style={{ width: '12%', height: 'auto' }}><img src={mongodb} className={stylesProyectos.logo} /></a>
                </div>
                <a href='https://aromasplc.vercel.app' target='blank'>
                    <div className={stylesProyectos.screen}>
                        <img src={isMobile() ? aromasScreenMob : aromasplc} className={isMobile() ? stylesProyectos.screensMobile : stylesProyectos.screens} />
                    </div>
                </a>
            </div>
            <div className={stylesProyectos.proyecto}>
                <h2 style={isMobile() ? { fontSize: '21px' } : {}}>Jardin Mi Pequeño Mundo</h2>
                <p>Proyecto realizado para un jardín de infantes y maternal con la idea de brindar información del mismo y cuales son los pasos para realizar las nuevas inscripciones. Cuenta con distintas apartados donde cada sección se encarga de mostrar una parte distinta de los jardines y una pagina de consultas donde se puede enviar preguntas al mail del jardín. Las tecnologías utilizadas son: FrontEnd: React Js + Typescript con tailwind css. BackEnd: Node Js con Express Js. Render y Vercel para el deploy.</p>
                <div className={stylesProyectos.tecnologias}>
                    <a href="https://www.typescriptlang.org" target='blank' style={{ width: '12%', height: 'auto' }}><img src={typescript} className={stylesProyectos.logo} /></a>
                    <a href="https://react.dev" target='blank' style={{ width: '12%', height: 'auto' }}><img src={react} className={stylesProyectos.logo} /></a>
                    <a href="https://nodejs.org/en" target='blank' style={{ width: '12%', height: 'auto' }}><img src={nodejs} className={stylesProyectos.logo} /></a>
                </div>
                <a href='https://mi-pequeno-mundo2.vercel.app' target='blank'>
                    <div className={stylesProyectos.screen}>
                        <img src={isMobile() ? jardinScreenMob : jardin} className={isMobile() ? stylesProyectos.screensMobile : stylesProyectos.screens} />
                    </div>
                </a>
            </div>
            <div className={stylesProyectos.proyecto}>
                <h2>Task Manager</h2>
                <p>Proyecto personal realizado para IOS y Android en forma de practica simulando un administrador de tareas donde cada una se puede dividir por prioridad. Cuenta con una autenticación completa hecha por mi en Nest js y tambien con toda la logica de una API Rest para la administración de tareas. Las tecnologías utilizadas son: FrontEnd: React Native + Typescript con Expo. BackEnd: Node Js con Nest Js y MongoDB.</p>
                <div className={stylesProyectos.tecnologias}>
                    <a href="https://www.typescriptlang.org" target='blank' style={{ width: '12%', height: 'auto' }}><img src={typescript} className={stylesProyectos.logo} /></a>
                    <a href="https://react.dev" target='blank' style={{ width: '12%', height: 'auto' }}><img src={react} className={stylesProyectos.logo} /></a>
                    <a href="https://nodejs.org/en" target='blank' style={{ width: '12%', height: 'auto' }}><img src={nodejs} className={stylesProyectos.logo} /></a>
                    <a href="https://nestjs.com" target='blank' style={{ width: '12%', height: 'auto' }}><img src={nestjs} className={stylesProyectos.logo} /></a>
                    <a href="https://www.mongodb.com/es" target='blank' style={{ width: '12%', height: 'auto' }}><img src={mongodb} className={stylesProyectos.logo} /></a>
                </div>
                <div className={stylesProyectos.screenNative}>
                    <img src={loginImg} className={stylesProyectos.screensNative} />
                    <img src={taskImg} alt="" className={stylesProyectos.screensNative} />
                    <img src={createTaskImg} alt="" className={stylesProyectos.screensNative} />
                    <img src={profileImg} alt="" className={stylesProyectos.screensNative} />
                </div>
            </div>
            <div className={stylesProyectos.proyecto}>
                <h2>All New Style</h2>
                <p>Proyecto realizado para el final del curso de React Js de CoderHouse. Este era un proyecto individual que consistia en crear una tienda web que tenga las funciones basicas como logica de carrito de compras, rutas protegidas, filtro de productos, etc. Este proyecto está desarrollado en React Js + Javascript para el Front-End y Firebase para simular el Back-End. Se hizo el despliegue en Vercel.</p>
                <div className={stylesProyectos.tecnologias}>
                    <a href="https://devdocs.io/javascript/" target='blank' style={{ width: '12%', height: 'auto' }}><img src={javascript} className={stylesProyectos.logo} /></a>
                    <a href="https://react.dev" target='blank' style={{ width: '12%', height: 'auto' }}><img src={react} className={stylesProyectos.logo} /></a>
                    <a href="https://firebase.google.com/?hl=es" target='blank' style={{ width: '12%', height: 'auto' }}><img src={firebase} className={stylesProyectos.logo} /></a>
                </div>
                <a href='https://allnewstyle-five.vercel.app/' target='blank'>
                    <div className={stylesProyectos.screen}>
                        <img src={isMobile() ? allnewStyleMob : allnewstyle} className={isMobile() ? stylesProyectos.screensMob : stylesProyectos.screens} />
                    </div>
                </a>
            </div>
        </div>
    )
}
