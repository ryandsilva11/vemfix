import { Link } from 'react-router-dom'
import './css/Chat.css'
import MessageReci from './MessageReci.jsx'
import MessageSent from './MessageSent.jsx'

export default function Chat() {
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
