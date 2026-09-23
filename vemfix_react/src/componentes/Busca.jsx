import "./css/Busca.css"
import DestaqueBusca from "./DestaqueBusca"
import Post from "./Post"
import { Link } from 'react-router-dom'

const DESTAQUES = [
    { cor: "#059669", sigla: "LF", nome: "Lucia Ferreira", servico: "Limpeza", cidade: "Salto", avaliacao: "5.0" },
    { cor: "#f59e0b", sigla: "JP", nome: "João Pedro", servico: "Eletricista", cidade: "Jundiaí", avaliacao: "4.8" },
    { cor: "#8b5cf6", sigla: "MR", nome: "Marcos Rodrigues", servico: "Encanador", cidade: "Indaiatuba", avaliacao: "4.5" },
    { cor: "#ec4899", sigla: "CL", nome: "Carla Lima", servico: "Pedreiro", cidade: "Itupeva", avaliacao: "4.9" },
    { cor: "#10b981", sigla: "GM", nome: "Gabriel Mendes", servico: "Jardineiro", cidade: "Campinas", avaliacao: "4.2" },
    { cor: "#f59e0b", sigla: "BR", nome: "Bruno Rodrigues", servico: "Pintor", cidade: "Hortolândia", avaliacao: "4.7" }
]

const POSTS = [
    { corSigla: "#059669", sigla: "LF", nome: "Lucia Ferreira", servico: "Limpeza", cidade: "Salto", avaliacao: "5.0", titulo: "limpeza de vidros", corBackground: "#10b981", icone: "🪟" },
    { corSigla: "#f59e0b", sigla: "JP", nome: "João Pedro", servico: "Eletricista", cidade: "Jundiaí", avaliacao: "4.8", titulo: "troca de chuveiro", corBackground: "#f59e0b", icone: "⚡" },
    { corSigla: "#8b5cf6", sigla: "MR", nome: "Marcos Rodrigues", servico: "Encanador", cidade: "Indaiatuba", avaliacao: "4.5", titulo: "conserto de torneira", corBackground: "#8b5cf6", icone: "🔧" },
    { corSigla: "#ec4899", sigla: "CL", nome: "Carla Lima", servico: "Pedreiro", cidade: "Itupeva", avaliacao: "4.9", titulo: "pequenas reformas", corBackground: "#ec4899", icone: "🧱" },
    { corSigla: "#10b981", sigla: "GM", nome: "Gabriel Mendes", servico: "Jardineiro", cidade: "Campinas", avaliacao: "4.2", titulo: "manutenção de jardins", corBackground: "#10b981", icone: "🌱" },
    { corSigla: "#f59e0b", sigla: "BR", nome: "Bruno Rodrigues", servico: "Pintor", cidade: "Hortolândia", avaliacao: "4.7", titulo: "pintura de paredes", corBackground: "#f59e0b", icone: "🎨" }
]

const FILTROS = [
    { nome: "Todas as categorias", ativo: true },
    { nome: "Melhor Avaliação", ativo: false },
    { nome: "❤️ Favoritos", ativo: false },
    { nome: "🔧 Encanador", ativo: false },
    { nome: "🧱 Pedreiro", ativo: false },
    { nome: "🎨 Pintor", ativo: false },
    { nome: "🛠️ Eletricista", ativo: false }
]

export default function Busca() {
    return (
        <div>
            <div className="feed-header">
                <div className="search-input-wrap">
                    <span>🔍</span>
                    <input type='text' placeholder="Buscar por posts ou prestadores" />
                </div>
                <div className="tipo-wrap">
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
                    {FILTROS.map((f) => (
                        <div key={f.nome} className={`chip ${f.ativo ? "active" : ""}`}>
                            {f.nome}
                        </div>
                    ))}
                </div>
            </div>

            <div className="feed-top-pros">
                {DESTAQUES.map((d) => (
                    <DestaqueBusca
                        key={d.nome}
                        cor={d.cor}
                        sigla={d.sigla}
                        nome={d.nome}
                        servico={d.servico}
                        cidade={d.cidade}
                        avaliacao={d.avaliacao}
                    />
                ))}
            </div>

            <div className="feed-list">
                {POSTS.map((p) => (
                    <Post
                        key={p.titulo + p.nome}
                        corSigla={p.corSigla}
                        sigla={p.sigla}
                        nome={p.nome}
                        servico={p.servico}
                        cidade={p.cidade}
                        avaliacao={p.avaliacao}
                        titulo={p.titulo}
                        corBackground={p.corBackground}
                        icone={p.icone}
                    />
                ))}
            </div>

            <Link to='/Post' className="fab" title="Novo post">＋</Link>
        </div>
    )
}