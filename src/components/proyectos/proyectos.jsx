import stylesProyectos from './proyectos.module.css'
import CodeIcon from '@mui/icons-material/Code';
import javascript from '../../img/javascript-logo-48.png'
import react from '../../img/react-logo-48.png'
import nodejs from '../../img/nodejs-logo-48.png'
import mongodb from '../../img/mongodb-logo-48.png'
import aromasplc from '../../img/aromasplcScreen.png'
import typescript from '../../img/typescript-logo-48.png'
import jardin from '../../img/jardinScreen.png'
import loginImg from '../../img/loginImg.jpg'
import taskImg from '../../img/tasksImg.jpg'
import createTaskImg from '../../img/createTaskImg.jpg'
import profileImg from '../../img/profileImg.jpg'
import nestjs from '../../img/nestjs.svg'
import aromasScreenMob from '../../img/aromasScreenMob.jpg'
import jardinScreenMob from '../../img/jardinScreenMob.jpg'
import html from '../../img/html5-logo-48.png'
import css from '../../img/css3-logo-48.png'
import menuResto from '../../img/menu.png'
import carritoResto from '../../img/carrito.png'
import formResto from '../../img/form.png'

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
                <h2>Implementación de lógica de carrito</h2>
                <p>Un cliente desde la plataforma de Workana me pidió hacer una implementación en su página web hecha con Hostinger Website Builder. La implementación consistía en agregar la lógica para comprar productos desde la misma página y que estos pedídos puedan llegar a un número de Whatsapp, con su respectíva lógica de carrito de compras y un checkout para que se pueda enviar el pedido. Las tecnologías que utilice fueron HTML, CSS, Javascript, Hostinger Website Builder.</p>
                <div className={stylesProyectos.tecnologias}>
                    <a href="https://devdocs.io/javascript/" target='blank' style={{ width: '12%', height: 'auto' }}><img src={html} className={stylesProyectos.logo} /></a>
                    <a href="https://react.dev" target='blank' style={{ width: '12%', height: 'auto' }}><img src={css} className={stylesProyectos.logo} /></a>
                    <a href="https://firebase.google.com/?hl=es" target='blank' style={{ width: '12%', height: 'auto' }}><img src={javascript} className={stylesProyectos.logo} /></a>
                </div>
                <div className={stylesProyectos.screen}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', marginBottom: '20px'}}>
                        <img src={menuResto} className={isMobile() ? stylesProyectos.screensRestoMob : stylesProyectos.screensResto} />
                        <img src={carritoResto} className={isMobile() ? stylesProyectos.screensRestoMob : stylesProyectos.screensResto} />
                    </div>
                    <img src={formResto} style={isMobile() ? { width: '85vw', borderRadius: '10px'} : { borderRadius: '10px' }} />
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
                <h2 style={isMobile() ? { fontSize: '21px' } : {}}>Administrador de tareas</h2>
                <p>Proyecto personal realizado para IOS y Android en forma de práctica simulando un administrador de tareas donde cada una se puede dividir por prioridad. Cuenta con una autenticación completa hecha por mi en Nest js y tambien con la logica de una API Rest para la administración de tareas. Las tecnologías utilizadas son: FrontEnd: React Native + Typescript con Expo. BackEnd: Node Js con Nest Js y MongoDB.</p>
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
        </div>
    )
}
