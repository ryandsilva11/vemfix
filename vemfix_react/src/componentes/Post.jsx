<<<<<<< HEAD
import { Link } from 'react-router-dom'

=======
>>>>>>> 73b6004 (att perfil e pdf chat)
export default function Post({ corSigla, sigla, nome, servico, cidade, avaliacao, titulo, corBackground, icone }) {
    return (
        <div className="feed-post">
            <div className="post-header">
<<<<<<< HEAD
                <Link to="/Perfil" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
                    <div className="av" style={{ background: corSigla }}>{sigla}</div>
                    <div className="info">
                        <h4>{nome}</h4>
                        <p>{servico} – {cidade}</p>
                    </div>
                </Link>
=======
                <div className="av" style={{ background: corSigla }}>{sigla}</div>
                <div className="info">
                    <h4>{nome}</h4>
                    <p>{servico} – {cidade}</p>
                </div>
>>>>>>> 73b6004 (att perfil e pdf chat)
                <div className="rating">★ {avaliacao}</div>
            </div>
            <div className="post-caption">{titulo}</div>
            <div className="post-img" style={{ background: corBackground }}>{icone}</div>
            <div className="post-actions">
                <button type="button">♡ 8.700</button>
<<<<<<< HEAD
                <Link to="/Perfil">↗ Visitar perfil</Link>
                <Link to="/Chat">💬 Contatar</Link>
=======
                <a href="perfil.html">↗ Visitar perfil</a>
                <a href="chat.html">💬 Contatar</a>
>>>>>>> 73b6004 (att perfil e pdf chat)
            </div>
        </div>
    )
}