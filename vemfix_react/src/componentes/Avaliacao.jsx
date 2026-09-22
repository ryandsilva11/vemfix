export default function Avaliacao({ avaliacao, descricao, data }) {
    return (
        <div className="review">
            <div className="review-stars">{avaliacao}</div>
            <div className="review-text">{descricao}</div>
            <div className="review-meta">{data}</div>
        </div>
    )
}