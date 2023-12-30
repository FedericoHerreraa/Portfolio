import './App.css'
import { ModoProvider } from './Context/ModoClaroOscuro'
import Header from './components/header/header'
import SobreMi from './components/sobreMi/sobreMi'

function App() {            
  return (
    <ModoProvider>
      <Header/>
      <SobreMi/>
    </ModoProvider>
  )
}

export default App
