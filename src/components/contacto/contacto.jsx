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
                <div style={{ marginBottom: '5%' }}>
                    <div className={stylesContacto.gmailLogo}></div>
                    <div style={{ marginLeft: '20px'}}>
                        <h2>fede.juan.herrera@gmail.com</h2>
                    </div>
                </div>
                <div style={{ marginBottom: '5%' }}>
                    <div className={stylesContacto.phoneLogo}></div>
                    <div style={{ marginLeft: '20px'}}>
                        <h2>+54 9 11 6296-4493</h2>
                    </div>
                </div>
                <div style={{ marginBottom: '5%' }}>
                    <a href="https://www.linkedin.com/in/federico-herrera-828636244/" target='blank'>
                        <div className={stylesContacto.linkedinLogo}></div>
                        <div style={{ marginLeft: '20px'}}>
                            <h2>Federico Herrera</h2>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/FedericoHerreraa" target='blank'>
                        <div className={stylesContacto.githubLogo}></div>
                        <div style={{ marginLeft: '20px'}}>
                            <h2> FedericoHerreraa</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacto