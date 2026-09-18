import "./css/Busca.css"
export default function Busca() {
    return (
        <div className="feed-header">
            <div className="search-input-wrap">
                <span>🔍</span>
                <input type='text' placeholder="Buscar por posts ou prestadores" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <label htmlFor="tipo-select" className="tipo-label">Tipo</label>
                <select id="tipo-select" className='tipo-select'>
                    <option value="">Todos</option>
                    <option value="Encanador">Encanador</option>
                    <option value="Eletricista">Eletricista</option>
                    <option value="Pintor">Pintor</option>
                    <option value="Jardineiro">Jardineiro</option>
                    <option value="Limpeza">Limpeza</option>
                    <option value="Pedreiro">Pedreiro</option>
                    <option value="Ar condicionado">Ar condicionado</option>
                    <option value="Chaveiro">Chaveiro</option>
                </select>
            </div>
            <div className="filter-chips">
                <div className="chip active">Todas as categorias</div>
                <div className="chip">Melhor Avaliação</div>
                <div className="chip">❤️ Favoritos</div>
                <div className="chip">🔧 Encanador</div>
                <div className="chip">🧱 Pedreiro</div>
                <div className="chip">🎨 Pintor</div>
                <div className="chip">🛠️ Eletricista</div>
            </div>
        </div>
    )
}