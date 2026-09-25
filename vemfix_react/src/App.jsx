import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar.jsx'
import Footer from './componentes/Footer.jsx'
import Home from './componentes/Home.jsx'
import Busca from './componentes/Busca.jsx'
import Conversa from './componentes/Conversa.jsx'
import Suporte from './componentes/Suporte.jsx'
import Chat from './componentes/Chat.jsx'
import Perfil from './componentes/Perfil.jsx'
import Post from './componentes/PostDo.jsx'
import Orcamento from './componentes/Orcamento.jsx'
import Cadastro from './componentes/Cadastro.jsx'
import Editar from './componentes/Editar.jsx'
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
        <Route path="/Perfil" element={<Perfil />}></Route>
        <Route path="/Post" element={<Post />} />
        <Route path="/Orcamento" element={<Orcamento />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Editar" element={<Editar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )

}
