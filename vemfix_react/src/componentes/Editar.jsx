import './css/Editar.css'
import { Link } from 'react-router-dom'
export default function Editar() {
    return (
        <div className="page-container" style={{ maxWidth: "520px" }}>
            <div className="edit-card">
                <div className="edit-avatar">RD</div>
                <div style={{ textAlign: "center", fontSize: "12px", opacity: "0.8", marginBottom: "20px" }}>Trocar foto</div>
                <div>
                    <input className="edit-field" type="text" value="Ryan Dias da Silva" placeholder="Nome completo" />
                    <input className="edit-field" type="tel" value="(11) 9583-57641" placeholder="Telefone" />
                    <input className="edit-field" type="text" value="Salto - SP" placeholder="Cidade - Estado" />
                    <select className="edit-field" title="Tipo de prestador">
                        <option value="">Selecione sua profissão</option>
                        <option value="pedreiro">Pedreiro</option>
                        <option value="jardineiro">Jardineiro</option>
                        <option value="pintor">Pintor</option>
                        <option value="eletricista">Eletricista</option>
                        <option value="encanador">Encanador</option>
                        <option value="carpinteiro">Carpinteiro</option>
                        <option value="marceneiro">Marceneiro</option>
                        <option value="mecanico">Mecânico</option>
                        <option value="limpeza">Serviço de Limpeza</option>
                        <option value="outro">Outro</option>
                    </select>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                        <button type="button" className="btn btn-danger" style={{ flex: '1' }}>Inativar conta</button>
                        <Link to="/" className="btn btn-secondary" style={{ flex: '1' }}>Salvar e Sair</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}