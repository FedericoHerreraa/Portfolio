
import stylesHeader from './header.module.css'
import { useModo } from '../../Context/ModoClaroOscuro'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    const { modo, cambiarModo } = useModo()

    const desplazamiento = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }
    
    return (
        <div className={modo ? stylesHeader.containerClaro : stylesHeader.containerOscuro}>
            <div className={modo ? stylesHeader.headerContainerClaro: stylesHeader.headerContainerOscuro}>
                <div>
                    <h2 className={stylesHeader.titulo}>Portafolio</h2>
                </div>
                <div className={stylesHeader.navInfo}>
                    <button
                        className={modo ? stylesHeader.btnClaro : stylesHeader.btnOscuro}
                        onClick={cambiarModo}
                    >
                        {modo ? <DarkModeIcon/> : <LightModeIcon/>}
                    </button>
                    <p>Proyectos</p>
                    <p>Contacto</p>
                </div>
            </div>
            <div className={modo ? stylesHeader.degradadoClaro : stylesHeader.degradadoOscuro}>
                <div>
                    <div className={stylesHeader.imgPersonal}>
                    </div>
                    <h1>Federico Herrera</h1>
                    <p style={{ fontSize: '23px', marginTop: '20px'}}>Desarrollador web Front-End</p>
                    <div onClick={desplazamiento} className={stylesHeader.icon}>
                       <ExpandMoreIcon fontSize='large'/>
                    </div>
                </div>
            </div>
        </div>
    )   
} 

export default Header