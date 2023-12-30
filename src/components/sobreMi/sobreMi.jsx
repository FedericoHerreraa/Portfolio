import stylesSobreMi from './sobreMi.module.css'


const SobreMi = () => {
    return (
        <div className={stylesSobreMi.container}>
            <div className={stylesSobreMi.titulo}>
                <h1>Sobre mi</h1>
            </div>
            <div className={stylesSobreMi.imagenes}>
                <div className={stylesSobreMi.img}>
                    <img src="https://img.freepik.com/vector-premium/desarrollo-web-lenguajes-programacion-css-html-it-ui-programador-personaje-dibujos-animados-que-desarrolla-sitio-web-codificacion-banner-ilustracion-plana_128772-862.jpg" alt="" />
                    <img src="https://img.freepik.com/vector-premium/desarrollo-web-lenguajes-programacion-css-html-it-ui-programador-personaje-dibujos-animados-que-desarrolla-sitio-web-codificacion-banner-ilustracion-plana_128772-859.jpg" alt="" />
                </div>
                <div className={stylesSobreMi.img}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4b5VF3-qOsMc1uKGJhbsyEOmZ7r4DysLQsQ&usqp=CAU" alt="" />
                    <img src="https://media.istockphoto.com/id/1325756727/es/vector/lenguaje-de-programaci%C3%B3n-y-c%C3%B3digo-de-programa-en-la-pantalla-port%C3%A1til-codificaci%C3%B3n-de.jpg?s=612x612&w=0&k=20&c=o55kTpaOYrOyxQJZ1Qr6th4l4YQTcqNaSNGp3WAEd4k=" alt="" />
                </div>
                <div className={stylesSobreMi.info}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolores beatae, distinctio quam ut, neque, labore doloremque dolor aut repellat vero et placeat voluptatibus aspernatur harum eius quaerat qui pariatur!</p>
                </div>
            </div>
        </div>
    )
}

export default SobreMi;