import { Link } from 'react-router-dom'

export default function DestaqueBusca({ cor, sigla, nome, servico, cidade, avaliacao }) {
    return (
        <Link to="/Perfil" className="top-pro-chip">
            <div className="av" style={{ background: cor }}>{sigla}</div>
            <div className="top-pro-info">
                <strong>{nome}</strong>
                <span>{servico} • {cidade}</span>
            </div>
            <span className="top-pro-rating">★ {avaliacao}</span>
        </Link>
    )
}
