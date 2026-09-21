import "./css/Suporte.css"
import Pergunta from "./Pergunta"
import CampoEx from "./CampoEx"
import CampoEsc from "./CampoEsc"
export default function Suporte() {
    return (
        <div className="info-page">
            <h1>Central de Suporte</h1>
            <p className="subtitle">Estamos aqui para ajudar clientes e prestadores</p>
            <div className="faq-section">
                <h2>Perguntas Frequentes</h2>
                <Pergunta pergunta="Como funciona o pagamento?" resposta="O pagamento é feito via Pix (QR Code ou copia e cola), diretamente pelo chat com o prestador após a aprovação do orçamento. A plataforma garante a segurança da transação." />
                <Pergunta pergunta="Posso cancelar um serviço?" resposta="Sim. Cancelamentos antes do início do serviço garantem reembolso total. Após o início, o reembolso será parcial dependendo do progresso do serviço." />
            </div>
            <div className="contact-box">
                <h2>Fale Conosco</h2>
                <p className="sub">Para clientes e prestadores — respondemos em até 24h</p>
                <div className="form-row">
                    <CampoEx texto="Nome" textoInput="Seu nome" />
                    <CampoEx texto="E-mail" textoInput="seu@email.com" />
                </div>

                <div className="form-row">
                    <CampoEsc texto="Eu sou" opc1="Cliente" opc2="Prestador" />
                    <CampoEsc texto="Assunto" opc1="Problema com serviço" opc2="Reembolso" opc3="Dúvida geral" opc4="Outro" />
                </div>
                <div className="form-group">
                    <label>Mensagem</label>
                    <textarea placeholder="Descreva sua dúvida ou problema..."></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-full" style={{ marginTop: '8px' }}>Enviar Mensagem</button>
            </div>
        </div>
    )
} 
