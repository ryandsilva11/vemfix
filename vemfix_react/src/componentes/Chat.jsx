import { Link, useLocation } from 'react-router-dom'
import './css/Chat.css'
import MessageReci from './MessageReci.jsx'
import MessageSent from './MessageSent.jsx'

export default function Chat() {
    const location = useLocation()
    const orcamento = location.state?.orcamento

    return (
        <div className="chat-container">
            <div className="chat-header">
                <Link to="/Conversa" className="chat-back-btn">←</Link>
                <div className="av" style={{ background: "#059669" }}>CS</div>
                <div>
                    <h4>Carlos Silva</h4>
                    <p>Online</p>
                </div>
            </div>
            <div className="chat-messages">
                <MessageReci msg="Olá! Vi que você precisa de um encanador. Como posso ajudar?" hora="09:15" />
                <MessageSent msg="Oi Carlos! Tenho um vazamento na cozinha, embaixo da pia." hora="09:20" />
                <MessageReci msg="Entendi. Pelo que descreve, pode ser a conexão do sifão. Geralmente é um reparo simples." hora="09:15" />
                <MessageSent msg="Que bom! Quanto ficaria mais ou menos?" hora="09:20" />
                <MessageReci msg="Para esse tipo de reparo, fica entre R$80 e R$120, dependendo da peça necessária." hora="09:15" />
                <MessageReci msg="Posso ir amanhã às 14h, tudo bem?" hora="09:20" />

                {orcamento && (
                    <div style={{ alignSelf: 'flex-end', maxWidth: '80%', margin: '4px 0' }}>
                        <div style={{
                            background: '#ecfdf5',
                            border: '1px solid #10b981',
                            borderRadius: '16px',
                            borderBottomRightRadius: '4px',
                            padding: '14px 18px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                <span style={{ fontSize: '20px' }}>📄</span>
                                <strong style={{ color: '#065f46', fontSize: '14px' }}>Orçamento Disponível</strong>
                            </div>
                            <div style={{ fontSize: '13px', color: '#374151', marginBottom: '10px', lineHeight: '1.4' }}>
                                <div><strong>Serviço:</strong> {orcamento.titulo}</div>
                                <div><strong>Total:</strong> R$ {orcamento.valor}</div>
                            </div>
                            <a
                                href={orcamento.url}
                                download={`${orcamento.titulo || 'orcamento'}.pdf`}
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px',
                                    fontSize: '12px',
                                    padding: '8px 14px',
                                    textDecoration: 'none',
                                    width: '100%',
                                    borderRadius: '8px'
                                }}
                            >
                                📥 Baixar / Visualizar PDF
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div className="chat-input-bar">
                <input className="chat-input" type="text" placeholder="Digite sua mensagem..." />
                <button type="button" className="chat-icon-btn" title="Anexar">📎</button>
                <Link to="/Orcamento" className="chat-icon-btn" title="Elaborar Orçamento">💲</Link>
                <button type="button" className="chat-icon-btn send" title="Enviar">▶</button>
            </div>
        </div>
    )
}
