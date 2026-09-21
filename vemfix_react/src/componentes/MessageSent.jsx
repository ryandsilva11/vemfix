export default function MessageSent({ msg, hora }) {
    return (
        <div className="msg sent">
            <div className="bubble">{msg}</div>
            <div className="msg-time">{hora}</div>
        </div>
    )
}