import ConversaInd from "./ConversaInd.jsx"
import "./css/Conversa.css"
export default function Conversa() {
    return (
        <div className="conversas-list">
            <h1>Conversas</h1>
            <ConversaInd corS="#dc2626" sigla="PA" hora="10:18" nome="Pedro Almeida" desc="Pedro Almeida quer começar uma conversa com você. Tipo: Encanador" />
            <ConversaInd corS="#059669" sigla="LF" hora="19:41" nome="Lucia Ferreira" desc="Perfeito! Confirmado para sexta." />
            <ConversaInd corS="#7c3aed" sigla="MC" hora="08:30" nome="Mariana Costa" desc="Olá! Posso ir amanhã às 14h. Fica bem?" />
        </div>
    )
}
