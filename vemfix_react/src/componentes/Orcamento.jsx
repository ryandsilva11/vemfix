import { Link } from 'react-router-dom'

export default function Orcamento() {
    return (
        <div>
            <Link to="/Chat" className="back-btn">← Voltar</Link>

            <div className="page-container">
                <div className="card">
                    <h1>Elaborar Orçamento</h1>
                    <p className="card-sub">Preencha os dados do orçamento para o cliente</p>

                    <div>
                        <div className="form-group">
                            <label>Título do Orçamento</label>
                            <input type="text" placeholder="Insira o título" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Data</label>
                                <input type="date" />
                            </div>
                            <div className="form-group">
                                <label>Nome do Cliente</label>
                                <input type="text" placeholder="Nome do cliente" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Endereço do Cliente</label>
                            <input type="text" placeholder="Endereço do cliente" />
                        </div>
                        <div className="form-group">
                            <label>Valor Estimado (R$)</label>
                            <input type="text" placeholder="Ex: 150,00" />
                        </div>
                        <div className="form-group">
                            <label>Fotos e Vídeos do Problema</label>
                            <div className="upload-box">
                                <div className="upload-icon">📷</div>
                                Adicionar fotos do local
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Descrição do Problema</label>
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
                </div>
            </div>
        </div>
    )
}