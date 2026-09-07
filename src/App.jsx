import Header from './components/Header'
import Hero from './components/Hero'
import Areas from './components/Areas'
import MisionVision from './components/MisionVision'
import PorQue from './components/PorQue'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Areas />
        <MisionVision />
        <PorQue />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
