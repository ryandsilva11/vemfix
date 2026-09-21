import { Link } from 'react-router-dom'
import './css/chat.css'
import MessageReci from './MessageReci.jsx'
import MessageSent from './MessageSent.jsx'
export default function Chat() {
    return (
        <div className="chat-container">
            <div className="chat-header">
                <Link to="/Conversa" style={{ fontSize: "18px", color: "#9ca3af" }}>←</Link>
                <div className="av" style={{ background: "#059669" }}>CS</div>
                <div>
                    <h4>Carlos Silva</h4>
                    <p>Online</p>
                </div>
            </div>
            <div className='chat-messages'>
                <MessageReci msg="Olá! Vi que você precisa de um encanador. Como posso ajudar?" hora="09:15" />
                <MessageSent msg="Oi Carlos! Tenho um vazamento na cozinha, embaixo da pia." hora="09:20" />
                <MessageReci msg="Entendi. Pelo que descreve, pode ser a conexão do sifão. Geralmente é um reparo simples." hora="09:15" />
                <MessageSent msg="Que bom! Quanto ficaria mais ou menos?" hora="09:20" />
                <MessageReci msg="Para esse tipo de reparo, fica entre R$80 e R$120, dependendo da peça necessária." hora="09:15" />
                <MessageReci msg="Posso ir amanhã às 14h, tudo bem?" hora="09:20" />
            </div>
            <div class="chat-input-bar">
                <input class="chat-input" type="text" placeholder="Digite sua mensagem..." />
                <button type="button" class="chat-icon-btn" title="Anexar">📎</button>
                <a href="orcamento.html" class="chat-icon-btn" title="Elaborar Orçamento">💲</a>
                <button type="button" class="chat-icon-btn send" title="Enviar">▶</button>
            </div>
        </div>
    )
}
