export default function PerfilDest(corS, sigla, nome, servico, cidade, avaliacao) {
    return (
        <div className="pro-card">
            <div className="pro-card-header">
                <div className="pro-avatar" style={{ background: '#059669' }}>CS</div>
                <div className="pro-info">
                    <h4>Carlos Silva</h4>
                    <p>Encanador – São Paulo</p>
                </div>
            </div>
            <div className="pro-rating">★ 4.9 <span style={{ color: 'var(--gray-500)', fontWeight: 400 }}> (127) 340 serviços</span></div>
            <div className="pro-desc">Encanador profissional com 15 anos de experiência. Especialista em vazamentos, reparos hidráulicos e instalações.</div>
            <a href="pages/chat.html" className="btn btn-light btn-full">Conversar</a>
        </div>
    )
}