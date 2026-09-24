import './css/Home.css'
import { Link } from 'react-router-dom'
import CategoriaCard from './CategoriaCard.jsx'
import PerfilDest from './PerfilDest.jsx'

const categorias = [
    { icone: '🔧', corFundo: '#fef3c7', nome: 'Encanador', qtd: '124 profissionais' },
    { icone: '⚡', corFundo: '#dbeafe', nome: 'Eletricista', qtd: '98 profissionais' },
    { icone: '🖌️', corFundo: '#fce7f3', nome: 'Pintor', qtd: '76 profissionais' },
    { icone: '🌿', corFundo: '#d1fae5', nome: 'Jardineiro', qtd: '53 profissionais' },
    { icone: '🧹', corFundo: '#ede9fe', nome: 'Limpeza', qtd: '201 profissionais' },
    { icone: '🏗️', corFundo: '#ffedd5', nome: 'Pedreiro', qtd: '87 profissionais' },
    { icone: '❄️', corFundo: '#cffafe', nome: 'Ar condicionado', qtd: '64 profissionais' },
    { icone: '🔑', corFundo: '#fef9c3', nome: 'Chaveiro', qtd: '41 profissionais' }
]

const passos = [
    { num: '🔍', titulo: '1. Busque', desc: 'Busque por categoria, localização ou nome do profissional. Veja avaliações e portfólio.' },
    { num: '💬', titulo: '2. Converse', desc: 'Converse diretamente com o prestador, combine detalhes e alinhe expectativas.' },
    { num: '✅', titulo: '3. Contrate', desc: 'Contrate com segurança. A plataforma garante proteção e garante os seus direitos.' }
]

const profissionais = [
    {
        corS: '#059669',
        sigla: 'CS',
        nome: 'Carlos Silva',
        servico: 'Encanador',
        cidade: 'São Paulo',
        avaliacao: '4.9',
        avaliacoes: '127',
        servicos: '340',
        desc: 'Encanador profissional com 15 anos de experiência. Especialista em vazamentos, reparos hidráulicos e instalações.'
    },
    {
        corS: '#7c3aed',
        sigla: 'AR',
        nome: 'Ana Rodrigues',
        servico: 'Eletricista',
        cidade: 'São Paulo',
        avaliacao: '4.8',
        avaliacoes: '98',
        servicos: '256',
        desc: 'Eletricista certificada. Instalações residenciais e comerciais, reparos e manutenção preventiva.'
    },
    {
        corS: '#dc2626',
        sigla: 'RM',
        nome: 'Roberto Mendes',
        servico: 'Pintor',
        cidade: 'Rio de Janeiro',
        avaliacao: '4.7',
        avaliacoes: '85',
        servicos: '198',
        desc: 'Pintor residencial e comercial. Acabamento impecável e pontualidade garantida.'
    }
]

export default function Home() {
    return (
        <main>
            <section className="hero">
                <h1>Encontre o profissional ideal</h1>
                <p>Conectamos você aos melhores prestadores de serviço da sua região, com praticidade, qualidade e proteção total.</p>
                <div className="hero-btns">
                    <Link to="/Cadastro" className="btn btn-primary">Começar Agora</Link>
                    <Link to="/Cadastro" className="btn btn-secondary">Cadastrar Agora</Link>
                </div>
                <div className="hero-badges">
                    <div>⭐ Avaliações protegidas</div>
                    <div>💬 Suporte 24h</div>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Categorias populares</h2>
                <div className="section-sub">Encontre o serviço que você precisa</div>
                <div className="categories-grid">
                    {categorias.map((cat) => (
                        <CategoriaCard
                            key={cat.nome}
                            icone={cat.icone}
                            corFundo={cat.corFundo}
                            nome={cat.nome}
                            qtd={cat.qtd}
                        />
                    ))}
                </div>
            </section>

            <section className="how-section">
                <h2 className="section-title">Como Funciona?</h2>
                <div className="how-steps">
                    {passos.map((passo) => (
                        <div key={passo.titulo} className="how-step">
                            <div className="how-step-num">{passo.num}</div>
                            <h3>{passo.titulo}</h3>
                            <p>{passo.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section section-muted">
                <h2 className="section-title">Profissionais em Destaque</h2>
                <div className="section-sub">Altamente avaliados pela comunidade</div>
                <div className="pros-grid">
                    {profissionais.map((pro) => (
                        <PerfilDest
                            key={pro.nome}
                            corS={pro.corS}
                            sigla={pro.sigla}
                            nome={pro.nome}
                            servico={pro.servico}
                            cidade={pro.cidade}
                            avaliacao={pro.avaliacao}
                            avaliacoes={pro.avaliacoes}
                            servicos={pro.servicos}
                            desc={pro.desc}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}