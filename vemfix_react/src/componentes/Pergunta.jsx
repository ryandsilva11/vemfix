export default function Pergunta({ pergunta, resposta }) {
    return (
        <details className="faq-item" open>
            <summary className="faq-question">{pergunta}<span className="faq-arrow">▼</span></summary>
            <div className="faq-answer">{resposta}</div>
        </details>
    )
}
