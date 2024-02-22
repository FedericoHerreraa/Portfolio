
import stylesHeader from './header.module.css'
import CoffeeIcon from '@mui/icons-material/Coffee';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    const esVistaMobile = () => window.innerWidth <= 768;

    const desplazamientoProyectos = () => {
        const offset = esVistaMobile() ? window.innerHeight * 3.2 : window.innerHeight + window.innerHeight * 1.5;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    };
    
    const desplazamientoContacto = () => {
        const offset = esVistaMobile() ? window.innerHeight * 5 : window.innerHeight + window.innerHeight * 3.5;
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
    
    return (
        <div className={stylesHeader.containerOscuro}>
            <div className={stylesHeader.headerContainerOscuro}>
                <div className={stylesHeader.navInfo}>
                    <div onClick={desplazamientoProyectos}>
                        <h3>Proyectos</h3>
                    </div>
                    <button
                        type='button'
                        className={stylesHeader.btnOscuro}
                    >
                        <CoffeeIcon fontSize='medium'/>
                    </button>
                    <div onClick={desplazamientoContacto}>
                        <h3>Contacto</h3>
                    </div>
                </div>
            </div>
            <div className={stylesHeader.info}>
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