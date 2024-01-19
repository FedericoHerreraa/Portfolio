import './App.css'
import { ModoProvider } from './Context/ModoClaroOscuro'
import Header from './components/header/header'
import SobreMi from './components/sobreMi/sobreMi'
import Proyectos from './components/proyectos/proyectos'

function App() {            
  return (
    <ModoProvider>
      <Header/>
      <SobreMi/>
      <Proyectos/>
    </ModoProvider>
  )
}

export default App
