import stylesContacto from './contacto.module.css'
import CodeIcon from '@mui/icons-material/Code';
import gmailLogo from '../../img/gmail-logo-48.png'
import phoneLogo from '../../img/phone-solid-48.png'
import linkedInLogo from '../../img/linkedin-logo-48.png'
import githubLogo from '../../img/github-logo-48.png'

export default function Contacto() {
    return (
        <div className={stylesContacto.container}>
            <div className={stylesContacto.title}>
                <CodeIcon fontSize='large'/>
                <h1>Contacto</h1>
                <CodeIcon fontSize='large'/>
            </div>
            <div className={stylesContacto.info}>
                <div style={{ marginBottom: '10%' }}>
                    <img src={gmailLogo} alt="" className={stylesContacto.logo}/>
                    <div style={{ marginLeft: '20px'}}>
                        <h2>fede.juan.herrera@gmail.com</h2>
                    </div>
                </div>
                <div style={{ marginBottom: '10%' }}>
                    <img src={phoneLogo} alt="" className={stylesContacto.logo}/>
                    <div style={{ marginLeft: '20px'}}>
                        <h2>+54 9 11 6296-4493</h2>
                    </div>
                </div>
                <div style={{ marginBottom: '10%' }}>
                    <a href="https://www.linkedin.com/in/federico-herrera-828636244/" target='blank'>
                        <img src={linkedInLogo} alt="" className={stylesContacto.logo}/>
                        <div style={{ marginLeft: '20px'}}>
                            <h2>Federico Herrera</h2>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/FedericoHerreraa" target='blank'>
                        <img src={githubLogo} alt="" className={stylesContacto.logo}/>
                        <div style={{ marginLeft: '20px'}}>
                            <h2>FedericoHerreraa</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
