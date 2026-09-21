import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './componentes/Home.jsx'
import Busca from './componentes/Busca.jsx'
import Conversa from './componentes/Conversa.jsx'
import Suporte from './componentes/Suporte.jsx'
import Chat from './componentes/Chat.jsx'
export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Busca" element={<Busca />} />
        <Route path="/Suporte" element={<Suporte />} />
        <Route path="/Conversa" element={<Conversa />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}
