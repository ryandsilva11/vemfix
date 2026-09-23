<<<<<<< HEAD
import { Link } from 'react-router-dom'

export default function Orcamento() {
=======
import { Link, useNavigate } from 'react-router-dom'
import { gerarOrcamento } from '../gerarOrcamento'
import './css/Orcamento.css'
export default function Orcamento() {
    const navigate = useNavigate()

    function enviar(evento) {
        evento.preventDefault()
        const dadosForm = new FormData(evento.currentTarget)
        const dados = Object.fromEntries(dadosForm.entries())
        const arquivo = URL.createObjectURL(gerarOrcamento(dados))
        navigate('/Chat', { state: { orcamento: { titulo: dados.titulo, arquivo } } })
    }

>>>>>>> 73b6004 (att perfil e pdf chat)
    return (
        <div>
            <Link to="/Chat" className="back-btn">← Voltar</Link>

            <div className="page-container">
                <div className="card">
                    <h1>Elaborar Orçamento</h1>
                    <p className="card-sub">Preencha os dados do orçamento para o cliente</p>

<<<<<<< HEAD
                    <div>
                        <div className="form-group">
                            <label>Título do Orçamento</label>
                            <input type="text" placeholder="Insira o título" />
=======
                    <form onSubmit={enviar}>
                        <div className="form-group">
                            <label>Título do Orçamento</label>
                            <input name="titulo" type="text" placeholder="Insira o título" required />
>>>>>>> 73b6004 (att perfil e pdf chat)
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Data</label>
<<<<<<< HEAD
                                <input type="date" />
                            </div>
                            <div className="form-group">
                                <label>Nome do Cliente</label>
                                <input type="text" placeholder="Nome do cliente" />
=======
                                <input name="data" type="date" required />
                            </div>
                            <div className="form-group">
                                <label>Nome do Cliente</label>
                                <input name="cliente" type="text" placeholder="Nome do cliente" required />
>>>>>>> 73b6004 (att perfil e pdf chat)
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Endereço do Cliente</label>
<<<<<<< HEAD
                            <input type="text" placeholder="Endereço do cliente" />
                        </div>
                        <div className="form-group">
                            <label>Valor Estimado (R$)</label>
                            <input type="text" placeholder="Ex: 150,00" />
=======
                            <input name="endereco" type="text" placeholder="Endereço do cliente" />
                        </div>
                        <div className="form-group">
                            <label>Valor Estimado (R$)</label>
                            <input name="valor" type="text" placeholder="Ex: 150,00" required />
>>>>>>> 73b6004 (att perfil e pdf chat)
                        </div>
                        <div className="form-group">
                            <label>Fotos e Vídeos do Problema</label>
                            <div className="upload-box">
<<<<<<< HEAD
                                <div className="upload-icon">📷</div>
                                Adicionar fotos do local
=======
                                <span style={{ fontSize: 24 }}>📷</span> Adicionar fotos do local
>>>>>>> 73b6004 (att perfil e pdf chat)
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Descrição do Problema</label>
<<<<<<< HEAD
                            <textarea placeholder="Detalhe o problema identificado..."></textarea>
                        </div>
                        <div className="form-group">
                            <label>Descrição do Serviço</label>
                            <textarea placeholder="Detalhe o serviço planejado..."></textarea>
                        </div>
                        <div className="form-row">
                            <Link to="/Chat" className="btn btn-primary">Enviar ao Cliente</Link>
                            <Link to="/Chat" className="btn btn-secondary">Salvar Rascunho</Link>
                        </div>
                    </div>
=======
                            <textarea name="problema" placeholder="Detalhe o problema identificado..."></textarea>
                        </div>
                        <div className="form-group">
                            <label>Descrição do Serviço</label>
                            <textarea name="servico" placeholder="Detalhe o serviço planejado..."></textarea>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Enviar ao Cliente</button>
                            <Link to="/Chat" className="btn btn-secondary" style={{ flex: 1 }}>Salvar Rascunho</Link>
                        </div>
                    </form>
>>>>>>> 73b6004 (att perfil e pdf chat)
                </div>
            </div>
        </div>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> 73b6004 (att perfil e pdf chat)
