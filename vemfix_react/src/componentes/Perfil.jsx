import './css/Perfil.css'
import Avaliacao from './Avaliacao'
import { Link } from 'react-router-dom'
<<<<<<< HEAD

export default function Perfil() {
=======
import { lerPerfil } from '../perfilLocal'
export default function Perfil() {
    const perfil = lerPerfil()
    const sigla = perfil.nome.split(' ').map((parte) => parte[0]).slice(0, 2).join('').toUpperCase()
>>>>>>> 73b6004 (att perfil e pdf chat)
    return (
        <div>
            <Link to='/Busca' className="back-btn">← Voltar</Link>

            <div className="perfil-container">
                <div className="perfil-banner">
<<<<<<< HEAD
                    <div className="perfil-avatar">LF</div>
                    <div className="perfil-info">
                        <h2>Lucia Ferreira</h2>
                        <div className="meta">🧹 Limpeza • 📍 São Paulo</div>
                        <div className="rating">⭐ <strong>5.0</strong> (203 avaliações) • 512 serviços</div>
                    </div>
                    <div className="perfil-actions">
                        <Link to="/Chat" className="btn btn-secondary">💬 Conversar</Link>
=======
                    <div className="perfil-avatar">{sigla}</div>
                    <div style={{ flex: 1 }}>
                        <h2>{perfil.nome}</h2>
                        <div className="meta">{perfil.especialidades?.join(', ')} • 📍 {perfil.cidade}</div>
                        <div className="rating">⭐ <strong>5.0</strong> (203 avaliações) • 512 serviços</div>
                    </div>
                    <div className="perfil-actions">
                        <a href="chat.html" className="btn btn-secondary">💬 Conversar</a>
>>>>>>> 73b6004 (att perfil e pdf chat)
                    </div>
                </div>

                <div className="perfil-card">
                    <h3>Sobre</h3>
<<<<<<< HEAD
                    <p className="perfil-sobre">
                        Serviços de limpeza residencial e pós-obra. Equipe treinada e produtos de qualidade. Atendo toda a Grande São Paulo com pontualidade e profissionalismo.
                    </p>
                </div>

=======
                    <p style={{ fontSize: "14px", color: "var(--gray-700)", lineHeight: "1.6" }}>{perfil.descricao || 'Nenhuma descrição informada.'}</p>
                </div>
>>>>>>> 73b6004 (att perfil e pdf chat)
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 73b6004 (att perfil e pdf chat)
