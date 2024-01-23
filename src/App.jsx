import './App.css'
import { ModoProvider } from './Context/ModoClaroOscuro'
import Header from './components/header/header'
import SobreMi from './components/sobreMi/sobreMi'
import Proyectos from './components/proyectos/proyectos'
import Contacto from './components/contacto/contacto'

function App() {            
  return (
    <ModoProvider>
      <Header/>
      <SobreMi/>
      <Proyectos/>
      <Contacto/>
    </ModoProvider>
  )
}

export default App
