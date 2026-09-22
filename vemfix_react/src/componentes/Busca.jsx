import "./css/Busca.css"
import DestaqueBusca from "./DestaqueBusca"
import Post from "./Post"
import { Link } from 'react-router-dom'
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
                <Link to='/Perfil'><DestaqueBusca cor="#059669" sigla="LF" nome="Lucia Ferreira" servico="Limpeza" cidade="Salto" avaliacao="5.0" /></Link>
                <Link to='/Perfil'><DestaqueBusca cor="#f59e0b" sigla="JP" nome="João Pedro" servico="Eletricista" cidade="Jundiaí" avaliacao="4.8" /></Link>
                <Link to='/Perfil'><DestaqueBusca cor="#8b5cf6" sigla="MR" nome="Marcos Rodrigues" servico="Encanador" cidade="Indaiatuba" avaliacao="4.5" /></Link>
                <Link to='/Perfil'><DestaqueBusca cor="#ec4899" sigla="CL" nome="Carla Lima" servico="Pedreiro" cidade="Itupeva" avaliacao="4.9" /></Link>
                <Link to='/Perfil'><DestaqueBusca cor="#10b981" sigla="GM" nome="Gabriel Mendes" servico="Jardineiro" cidade="Campinas" avaliacao="4.2" /></Link>
                <Link to='/Perfil'><DestaqueBusca cor="#f59e0b" sigla="BR" nome="Bruno Rodrigues" servico="Pintor" cidade="Hortolândia" avaliacao="4.7" /></Link>
            </div>

            <div className="feed-list">
                <Link to='/Perfil'><Post corSigla="#059669" sigla="LF" nome="Lucia Ferreira" servico="Limpeza" cidade="Salto" avaliacao="5.0" titulo="limpeza de vidros" corBackground="#10b981" icone="🪟" /></Link>
                <Link to='/Perfil'><Post corSigla="#f59e0b" sigla="JP" nome="João Pedro" servico="Eletricista" cidade="Jundiaí" avaliacao="4.8" titulo="troca de chuveiro" corBackground="#f59e0b" icone="⚡" /></Link>
                <Link to='/Perfil'><Post corSigla="#8b5cf6" sigla="MR" nome="Marcos Rodrigues" servico="Encanador" cidade="Indaiatuba" avaliacao="4.5" titulo="conserto de torneira" corBackground="#8b5cf6" icone="🔧" /></Link>
                <Link to='/Perfil'><Post corSigla="#ec4899" sigla="CL" nome="Carla Lima" servico="Pedreiro" cidade="Itupeva" avaliacao="4.9" titulo="pequenas reformas" corBackground="#ec4899" icone="🧱" /></Link>
                <Link to='/Perfil'><Post corSigla="#10b981" sigla="GM" nome="Gabriel Mendes" servico="Jardineiro" cidade="Campinas" avaliacao="4.2" titulo="manutenção de jardins" corBackground="#10b981" icone="🌱" /></Link>
                <Post corSigla="#f59e0b" sigla="BR" nome="Bruno Rodrigues" servico="Pintor" cidade="Hortolândia" avaliacao="4.7" titulo="pintura de paredes" corBackground="#f59e0b" icone="🎨" />
            </div>

            <Link to='/Post' className="fab" title="Novo post">＋</Link>


        </div>
    )
}