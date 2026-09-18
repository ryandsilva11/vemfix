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
                        <li><a href="pages/busca.html">Buscar Serviços</a></li>
                        <li><a href="pages/cadastro.html">Cadastrar-se</a></li>
                        <li><a href="pages/garantias.html">Garantias</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a href="pages/suporte.html">Central de Ajuda</a></li>
                        <li><a href="pages/suporte.html">Fale Conosco</a></li>
                        <li><a href="pages/suporte.html">Política de Reembolso</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>Políticas</h5>
                    <ul>
                        <li><a href="pages/garantias.html">Termos de uso</a></li>
                        <li><a href="pages/garantias.html">Privacidade</a></li>
                        <li><a href="pages/garantias.html">Responsabilidades</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">© 2025 VemFix – Todos os direitos reservados</div>
        </footer>
    )
}