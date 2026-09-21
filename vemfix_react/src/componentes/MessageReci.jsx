export default function MessageReci({ msg, hora }) {
    return (
        <div className="msg received">
            <div className="bubble">{msg}</div>
            <div className="msg-time">{hora}</div>
        </div>
    )
}