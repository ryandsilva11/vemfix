import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="nav-logo">
                <div className="logo-icon">V</div>
                VemFix
            </Link>
            <div className="nav-links" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
                <Link to="/">Início</Link>
                <Link to="/Busca">Busca</Link>
                <Link to="/Suporte">Suporte</Link>
                <Link to="/Conversa">Conversas</Link>
            </div>
        </nav>
    )
}
