import "./css/Busca.css"
import DestaqueBusca from "./DestaqueBusca"
import Post from "./Post"
export default function Busca() {
    return (
        <div>
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

            <div className="feed-top-pros">
                <DestaqueBusca cor="#059669" sigla="LF" nome="Lucia Ferreira" servico="Limpeza" cidade="Salto" avaliacao="5.0" />
                <DestaqueBusca cor="#f59e0b" sigla="JP" nome="João Pedro" servico="Eletricista" cidade="Jundiaí" avaliacao="4.8" />
                <DestaqueBusca cor="#8b5cf6" sigla="MR" nome="Marcos Rodrigues" servico="Encanador" cidade="Indaiatuba" avaliacao="4.5" />
                <DestaqueBusca cor="#ec4899" sigla="CL" nome="Carla Lima" servico="Pedreiro" cidade="Itupeva" avaliacao="4.9" />
                <DestaqueBusca cor="#10b981" sigla="GM" nome="Gabriel Mendes" servico="Jardineiro" cidade="Campinas" avaliacao="4.2" />
                <DestaqueBusca cor="#f59e0b" sigla="BR" nome="Bruno Rodrigues" servico="Pintor" cidade="Hortolândia" avaliacao="4.7" />
            </div>

            <div className="feed-list">
                <Post corSigla="#059669" sigla="LF" nome="Lucia Ferreira" servico="Limpeza" cidade="Salto" avaliacao="5.0" titulo="limpeza de vidros" corBackground="#10b981" icone="🪟" />
                <Post corSigla="#f59e0b" sigla="JP" nome="João Pedro" servico="Eletricista" cidade="Jundiaí" avaliacao="4.8" titulo="troca de chuveiro" corBackground="#f59e0b" icone="⚡" />
                <Post corSigla="#8b5cf6" sigla="MR" nome="Marcos Rodrigues" servico="Encanador" cidade="Indaiatuba" avaliacao="4.5" titulo="conserto de torneira" corBackground="#8b5cf6" icone="🔧" />
                <Post corSigla="#ec4899" sigla="CL" nome="Carla Lima" servico="Pedreiro" cidade="Itupeva" avaliacao="4.9" titulo="pequenas reformas" corBackground="#ec4899" icone="🧱" />
                <Post corSigla="#10b981" sigla="GM" nome="Gabriel Mendes" servico="Jardineiro" cidade="Campinas" avaliacao="4.2" titulo="manutenção de jardins" corBackground="#10b981" icone="🌱" />
                <Post corSigla="#f59e0b" sigla="BR" nome="Bruno Rodrigues" servico="Pintor" cidade="Hortolândia" avaliacao="4.7" titulo="pintura de paredes" corBackground="#f59e0b" icone="🎨" />
            </div>

            <a href="post.html" className="fab" title="Novo post">＋</a>


        </div>
    )
}