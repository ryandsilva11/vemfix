import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav>
            <a href="index.html" className="nav-logo">
                <div className="logo-icon">V</div>
                VemFix
            </a>
            <div className="nav-links">
                <Link to="/">Início</Link>
                <Link to="/Busca">Busca</Link>
                <a href="pages/suporte.html">Suporte</a>
                <a href="pages/conversas.html">Chat</a>
            </div>
            <div className="nav-actions">
                <a href="pages/busca.html" className="search-icon-btn" title="Buscar">🔍</a>
                <a href="pages/cadastro.html" className="btn btn-primary btn-sm">Cadastrar</a>
            </div>
        </nav>
    )
}
