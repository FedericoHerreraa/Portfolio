import Code from '@mui/icons-material/Code';
import stylesSobreMi from './sobreMi.module.css'
import CodeIcon from '@mui/icons-material/Code';

const SobreMi = () => {
    return (
        <div className={stylesSobreMi.container}>
            <div className={stylesSobreMi.titulo}>
                <CodeIcon fontSize='large'/>
                <h1>Sobre mi</h1>
                <CodeIcon fontSize='large'/>
            </div>
            <div className={stylesSobreMi.info}>
                <div >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores beatae, distinctio quam ut, neque, labore doloremque dolor aut repellat vero et placeat voluptatibus aspernatur harum eius quaerat qui pariatur!</p>
                </div>
                <div className={stylesSobreMi.infoContainer}>
                    <div className={stylesSobreMi.habilidades}>
                        <h2>Habilidades</h2>
                    </div>
                    <div className={stylesSobreMi.certificaciones}>
                        <h2>Certificaciones</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;