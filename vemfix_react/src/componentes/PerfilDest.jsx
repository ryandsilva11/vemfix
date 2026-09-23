import { Link } from 'react-router-dom'

export default function PerfilDest({ corS, sigla, nome, servico, cidade, avaliacao, avaliacoes, servicos, desc }) {
    return (
        <div className="pro-card">
            <div className="pro-card-header">
                <div className="pro-avatar" style={{ background: corS }}>{sigla}</div>
                <div className="pro-info">
                    <h4>{nome}</h4>
                    <p>{servico} – {cidade}</p>
                </div>
            </div>
            <div className="pro-rating">
                ★ {avaliacao} <span className="pro-rating-sub">({avaliacoes}) {servicos} serviços</span>
            </div>
            <div className="pro-desc">{desc}</div>
            <Link to="/Chat" className="btn btn-light btn-full">Conversar</Link>
        </div>
    )
}