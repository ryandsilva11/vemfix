import { Link } from 'react-router-dom'

export default function CategoriaCard({ icone, corFundo, nome, qtd }) {
    return (
        <Link to="/Busca" className="cat-card">
            <div className="cat-icon" style={{ background: corFundo }}>{icone}</div>
            <div className="cat-name">{nome}</div>
            <div className="cat-count">{qtd}</div>
        </Link>
    )
}
