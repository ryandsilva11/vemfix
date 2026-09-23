<<<<<<< HEAD
import { Link } from 'react-router-dom'
import './css/Chat.css'
import MessageReci from './MessageReci.jsx'
import MessageSent from './MessageSent.jsx'

export default function Chat() {
    return (
        <div className="chat-container">
            <div className="chat-header">
                <Link to="/Conversa" className="chat-back-btn">←</Link>
=======
import { Link, useLocation } from 'react-router-dom'
import './css/Chat.css'
import MessageReci from './MessageReci.jsx'
import MessageSent from './MessageSent.jsx'
export default function Chat() {
    const { state } = useLocation()
    return (
        <div className="chat-container">
            <div className="chat-header">
                <Link to="/Conversa" style={{ fontSize: "18px", color: "#9ca3af" }}>←</Link>
>>>>>>> 73b6004 (att perfil e pdf chat)
                <div className="av" style={{ background: "#059669" }}>CS</div>
                <div>
                    <h4>Carlos Silva</h4>
                    <p>Online</p>
                </div>
            </div>
<<<<<<< HEAD
            <div className="chat-messages">
=======
            <div className='chat-messages'>
>>>>>>> 73b6004 (att perfil e pdf chat)
                <MessageReci msg="Olá! Vi que você precisa de um encanador. Como posso ajudar?" hora="09:15" />
                <MessageSent msg="Oi Carlos! Tenho um vazamento na cozinha, embaixo da pia." hora="09:20" />
                <MessageReci msg="Entendi. Pelo que descreve, pode ser a conexão do sifão. Geralmente é um reparo simples." hora="09:15" />
                <MessageSent msg="Que bom! Quanto ficaria mais ou menos?" hora="09:20" />
                <MessageReci msg="Para esse tipo de reparo, fica entre R$80 e R$120, dependendo da peça necessária." hora="09:15" />
                <MessageReci msg="Posso ir amanhã às 14h, tudo bem?" hora="09:20" />
<<<<<<< HEAD
=======
                {state?.orcamento && <div className="msg sent"><div className="bubble">Orçamento enviado: <a href={state.orcamento.arquivo} download="orcamento.pdf">📄 {state.orcamento.titulo}.pdf</a></div></div>}
>>>>>>> 73b6004 (att perfil e pdf chat)
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
