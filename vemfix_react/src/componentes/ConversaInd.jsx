import { Link } from 'react-router-dom'
export default function ConversaInd({ corS, sigla, hora, nome, desc }) {
    return (
        <div className="conversa-item">
            <div className="conversa-av" style={{ background: corS }}>{sigla}</div>
            <div className="conversa-info">
                <div className="time">{hora}</div>
                <h4>{nome}</h4>
                <p>{desc}</p>
            </div>
            <div className="conversa-actions">
                <Link to="/Chat" className="conv-btn accept">✓</Link>
                <button type="button" className="conv-btn deny" title="Recusar">🚫</button>
            </div>
        </div>
    )
}
