
import stylesHeader from './header.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ftPersonal from '../../img/ftPersonal.jpg'

export default function Header() {
    const esVistaMobile = () => window.innerWidth <= 768;

    const desplazamientoProyectos = () => {
        const offset = esVistaMobile() ? window.innerHeight * 3.2 : window.innerHeight + window.innerHeight * 1.5;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    };

    const desplazamientoContacto = () => {
        const offset = document.body.scrollHeight - window.innerHeight;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    };

    const desplazamiento = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const descargarCV = () => {
        const enlace = document.createElement('a');
        enlace.href = '/CV%20Federico%20Herrera.pdf'; 
        enlace.download = 'FedericoHerreraCV.pdf'; 

        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);
    };

    return (
        <div className={stylesHeader.container}>
            <header className={stylesHeader.headerContainer}>
                <div className={stylesHeader.navInfo}>
                    <div onClick={desplazamientoProyectos}>
                        <h3>Proyectos</h3>
                    </div>
                    <button className={stylesHeader.cv} onClick={descargarCV}>
                        <p>Descargar CV</p>
                    </button>
                    <div onClick={desplazamientoContacto}>
                        <h3>Contacto</h3>
                    </div>
                </div>
            </header>
            <div className={stylesHeader.info}>
                <div>
                    <img src={ftPersonal} className={stylesHeader.imgPersonal}/>
                    <h1>Federico Herrera</h1>
                    <p style={{ fontSize: '23px', marginTop: '20px' }}>Desarrollador web Full-Stack</p>
                    <div onClick={desplazamiento} className={stylesHeader.icon}>
                        <ExpandMoreIcon fontSize='large' />
                    </div>
                </div>
            </div>
        </div>
    )
}
