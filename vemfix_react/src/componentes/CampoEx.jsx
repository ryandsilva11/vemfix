export default function CampoEx({ texto, textoInput }) {
    return (
        <div className="form-group">
            <label>{texto}</label>
            <input type="text" placeholder={textoInput} />
        </div>
    )
}
