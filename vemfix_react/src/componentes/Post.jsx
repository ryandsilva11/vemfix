import { Link } from 'react-router-dom'

export default function Post({ corSigla, sigla, nome, servico, cidade, avaliacao, titulo, corBackground, icone }) {
    return (
        <div className="feed-post">
            <div className="post-header">
                <Link to="/Perfil" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                    <div className="av" style={{ background: corSigla }}>{sigla}</div>
                    <div className="info">
                        <h4>{nome}</h4>
                        <p>{servico} – {cidade}</p>
                    </div>
                </Link>
                <div className="rating">★ {avaliacao}</div>
            </div>
            <div className="post-caption">{titulo}</div>
            <div className="post-img" style={{ background: corBackground }}>{icone}</div>
            <div className="post-actions">
                <button type="button">♡ 8.700</button>
                <Link to="/Perfil">↗ Visitar perfil</Link>
                <Link to="/Chat">💬 Contatar</Link>
            </div>
        </div>
    )
}