<<<<<<< HEAD
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
=======
export default function DestaqueBusca({ cor, sigla, nome, servico, cidade, avaliacao }) {
    return (
        <a href="perfil.html" className="top-pro-chip" >
            <div className="av" style={{ background: cor }}>{sigla}</div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <strong>{nome}</strong>
                <span style={{ color: 'var(--gray-500)' }}>{servico} • {cidade}</span>
            </div>
            <span style={{ color: '#f59e0b', fontWeight: '700' }}>★ {avaliacao}</span>
        </a >
    )
}   
>>>>>>> 73b6004 (att perfil e pdf chat)
