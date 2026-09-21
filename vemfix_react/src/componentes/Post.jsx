export default function Post({ corSigla, sigla, nome, servico, cidade, avaliacao, titulo, corBackground, icone }) {
    return (
        <div className="feed-post">
            <div className="post-header">
                <div className="av" style={{ background: corSigla }}>{sigla}</div>
                <div className="info">
                    <h4>{nome}</h4>
                    <p>{servico} – {cidade}</p>
                </div>
                <div className="rating">★ {avaliacao}</div>
            </div>
            <div className="post-caption">{titulo}</div>
            <div className="post-img" style={{ background: corBackground }}>{icone}</div>
            <div className="post-actions">
                <button type="button">♡ 8.700</button>
                <a href="perfil.html">↗ Visitar perfil</a>
                <a href="chat.html">💬 Contatar</a>
            </div>
        </div>
    )
}