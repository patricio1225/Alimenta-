import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import ODS2 from './components/ODS2'
import Dicas from './components/Dicas'
import DadosAgricolas from './components/DadosAgricolas'
import Footer from './components/Footer'
import ComoFunciona from './components/ComoFunciona'
import Participar from './components/Participar'
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Inicio />
        <ODS2 />
        <ComoFunciona/>
        <Dicas/>
        <DadosAgricolas/>
        <Participar/>
      </main>
      <Footer/>
    </>
  )
}

export default App