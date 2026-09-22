import './css/Perfil.css'
import Avaliacao from './Avaliacao'
import { Link } from 'react-router-dom'
export default function Perfil() {
    return (
        <div>
            <Link to='/Busca' className="back-btn">← Voltar</Link>

            <div className="perfil-container">
                <div className="perfil-banner">
                    <div className="perfil-avatar">LF</div>
                    <div style={{ flex: 1 }}>
                        <h2>Lucia Ferreira</h2>
                        <div className="meta">🧹 Limpeza • 📍 São Paulo</div>
                        <div className="rating">⭐ <strong>5.0</strong> (203 avaliações) • 512 serviços</div>
                    </div>
                    <div className="perfil-actions">
                        <a href="chat.html" className="btn btn-secondary">💬 Conversar</a>
                    </div>
                </div>

                <div className="perfil-card">
                    <h3>Sobre</h3>
                    <p style={{ fontSize: "14px", color: "var(--gray-700)", lineHeight: "1.6" }}>Serviços de limpeza residencial e pós-obra. Equipe treinada e produtos de qualidade. Atendo toda a Grande São Paulo com pontualidade e profissionalismo.</p>
                </div>
                <div className="perfil-card">
                    <h3>Avaliações Recentes</h3>
                    <Avaliacao avaliacao="★★★★★" descricao="Excelente profissional! Pontual, educada e fez um trabalho impecável. Recomendo!" data="há 2 dias" />
                    <Avaliacao avaliacao="★★★★" descricao="Muito bom, resolveu o problema rápido e com preço justo. Voltarei a contratar." data="há 1 semana" />
                    <Avaliacao avaliacao="★★★★★" descricao="Limpeza pós-obra perfeita. Super recomendo a Lucia para qualquer trabalho de limpeza!" data="há 2 semanas" />
                    <Avaliacao avaliacao="★★★" descricao="O preço foi justo, porem a limpeza não foi das melhores." data="há 5 dias" />
                </div>
            </div>
        </div>
    )
}