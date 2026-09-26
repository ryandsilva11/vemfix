import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { jsPDF } from 'jspdf'

export default function Orcamento() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        titulo: '',
        data: '',
        cliente: '',
        endereco: '',
        valor: '',
        problema: '',
        servico: ''
    })

    function handleChange(e) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    function enviarOrcamento(e) {
        e.preventDefault()

        // 1. Criação do documento PDF direto no navegador
        const doc = new jsPDF()

        // Faixa de cabeçalho
        doc.setFillColor(5, 150, 105) // Verde VemFix
        doc.rect(0, 0, 210, 28, 'F')

        doc.setTextColor(255, 255, 255)
        doc.setFontSize(18)
        doc.text('VemFix - Orçamento de Serviço', 14, 18)

        // Dados do Orçamento
        doc.setTextColor(33, 37, 41)
        doc.setFontSize(12)
        doc.text(`Título: ${form.titulo || 'Não informado'}`, 14, 42)
        doc.text(`Cliente: ${form.cliente || 'Não informado'}`, 14, 52)
        doc.text(`Data: ${form.data || new Date().toLocaleDateString()}`, 14, 62)
        doc.text(`Endereço: ${form.endereco || 'Não informado'}`, 14, 72)
        doc.text(`Valor Estimado: R$ ${form.valor || '0,00'}`, 14, 82)

        // Seção do Problema
        doc.setFontSize(13)
        doc.text('Descrição do Problema:', 14, 100)
        doc.setFontSize(10)
        doc.setTextColor(75, 85, 99)
        doc.text(form.problema || 'Nenhum detalhe informado.', 14, 108, { maxWidth: 180 })

        // Seção do Serviço
        doc.setFontSize(13)
        doc.setTextColor(33, 37, 41)
        doc.text('Descrição do Serviço Planejado:', 14, 130)
        doc.setFontSize(10)
        doc.setTextColor(75, 85, 99)
        doc.text(form.servico || 'Nenhum detalhe informado.', 14, 138, { maxWidth: 180 })

        // 2. Converte o PDF para URL na memória
        const pdfBlob = doc.output('blob')
        const arquivoUrl = URL.createObjectURL(pdfBlob)

        // 3. Redireciona para o Chat com o PDF no state
        navigate('/Chat', {
            state: {
                orcamento: {
                    titulo: form.titulo || 'Orçamento',
                    valor: form.valor || '0,00',
                    url: arquivoUrl
                }
            }
        })
    }

    return (
        <div>
            <Link to="/Chat" className="back-btn">← Voltar</Link>

            <div className="page-container">
                <div className="card">
                    <h1>Elaborar Orçamento</h1>
                    <p className="card-sub">Preencha os dados do orçamento para o cliente</p>

                    <form onSubmit={enviarOrcamento}>
                        <div className="form-group">
                            <label>Título do Orçamento</label>
                            <input
                                name="titulo"
                                type="text"
                                placeholder="Ex: Conserto de vazamento"
                                value={form.titulo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Data</label>
                                <input
                                    name="data"
                                    type="date"
                                    value={form.data}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Nome do Cliente</label>
                                <input
                                    name="cliente"
                                    type="text"
                                    placeholder="Nome do cliente"
                                    value={form.cliente}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Endereço do Cliente</label>
                            <input
                                name="endereco"
                                type="text"
                                placeholder="Endereço do cliente"
                                value={form.endereco}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Valor Estimado (R$)</label>
                            <input
                                name="valor"
                                type="text"
                                placeholder="Ex: 150,00"
                                value={form.valor}
                                onChange={handleChange}
                                required
                            />
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
                            <textarea
                                name="problema"
                                placeholder="Detalhe o problema identificado..."
                                value={form.problema}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Descrição do Serviço</label>
                            <textarea
                                name="servico"
                                placeholder="Detalhe o serviço planejado..."
                                value={form.servico}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Enviar ao Cliente</button>
                            <Link to="/Chat" className="btn btn-secondary" style={{ flex: 1 }}>Salvar Rascunho</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}