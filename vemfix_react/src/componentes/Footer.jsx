import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <div className="footer-brand">
                    <div className="logo"><div className="logo-icon">V</div> VemFix</div>
                    <p>Conectamos clientes e prestadores de serviço com confiança e qualidade.</p>
                </div>
                <div className="footer-col">
                    <h5>Plataforma</h5>
                    <ul>
                        <li><Link to="/Busca">Buscar Serviços</Link></li>
                        <li><Link to="/Cadastro">Cadastrar-se</Link></li>
                        <li><a href="#garantias">Garantias</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h5>Suporte</h5>
                    <ul>
                        <li><Link to="/Suporte">Central de Ajuda</Link></li>
                        <li><Link to="/Suporte">Fale Conosco</Link></li>
                        <li><Link to="/Suporte">Política de Reembolso</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h5>Políticas</h5>
                    <ul>
                        <li><a href="#termos">Termos de uso</a></li>
                        <li><a href="#privacidade">Privacidade</a></li>
                        <li><a href="#responsabilidades">Responsabilidades</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">© 2025 VemFix – Todos os direitos reservados</div>
        </footer>
    )
}