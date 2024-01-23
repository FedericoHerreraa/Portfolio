import stylesContacto from './contacto.module.css'
import CodeIcon from '@mui/icons-material/Code';

const Contacto = () => {
    return (
        <div className={stylesContacto.container}>
            <div className={stylesContacto.title}>
                <CodeIcon fontSize='large'/>
                <h1>Contacto</h1>
                <CodeIcon fontSize='large'/>
            </div>
            <div className={stylesContacto.info}>
                <div>
                    <img src="src/img/gmail-logo-48.png" alt="" />
                    <h2>fede.juan.herrera@gmail.com</h2>
                </div>
                <div>
                    <img src="src/img/phone-solid-48.png" alt="" />
                    <h2>+54 9 11 6296-4493</h2>
                </div>
                <div>
                    <img src="src/img/linkedin-logo-48.png" alt="" />
                    <h2>Federico Herrera</h2>
                </div>
                <div>
                    <img src="src/img/github-logo-48.png" alt="" />
                    <h2>FedericoHerreraa</h2>
                </div>
            </div>
        </div>
    )
}

export default Contacto