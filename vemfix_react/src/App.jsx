import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './componentes/Home.jsx'
import Busca from './componentes/Busca.jsx'
import Suporte from './componentes/Suporte.jsx'
export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Busca" element={<Busca />} />
        <Route path="/Suporte" element={<Suporte />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}
