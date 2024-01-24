
import stylesHeader from './header.module.css'
import { useModo } from '../../Context/ModoClaroOscuro'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    const { darkMode, cambiarModo } = useModo()

    const esVistaMobile = () => window.innerWidth <= 768;

    const desplazamientoProyectos = () => {
        const offset = esVistaMobile() ? window.innerHeight * 1.5 : window.innerHeight + window.innerHeight * 1.1;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    };
    
    const desplazamientoContacto = () => {
        const offset = esVistaMobile() ? window.innerHeight * 3 : window.innerHeight + window.innerHeight * 3;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    };
    
    const desplazamiento = () => {
        const offset = esVistaMobile() ? 0 : window.innerHeight;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    };
    
    return (
        <div className={darkMode ? stylesHeader.containerOscuro : stylesHeader.containerClaro}>
            <div className={darkMode ? stylesHeader.headerContainerOscuro : stylesHeader.headerContainerClaro}>
                <div className={stylesHeader.navInfo}>
                    <div onClick={desplazamientoProyectos}>
                        <h3>Proyectos</h3>
                    </div>
                    <button
                        type='button'
                        className={darkMode ? stylesHeader.btnOscuro : stylesHeader.btnClaro}
                        onClick={cambiarModo}
                    >
                        {darkMode ? <LightModeIcon/> : <DarkModeIcon/>}
                    </button>
                    <div onClick={desplazamientoContacto}>
                        <h3>Contacto</h3>
                    </div>
                </div>
            </div>
            <div className={darkMode ? stylesHeader.info : stylesHeader.info}>
                <div>
                    <div className={stylesHeader.imgPersonal}>
                    </div>
                    <h1>Federico Herrera</h1>
                    <p style={{ fontSize: '23px', marginTop: '20px'}}>Desarrollador web Full-Stack</p>
                    <div onClick={desplazamiento} className={stylesHeader.icon}>
                       <ExpandMoreIcon fontSize='large'/>
                    </div>
                </div>
            </div>
        </div>
    )   
} 

export default Header