export default function CampoEsc({ texto, opcoes, opc1, opc2, opc3, opc4 }) {
    const lista = opcoes || [opc1, opc2, opc3, opc4].filter(Boolean)

    return (
        <div className="form-group">
            <label>{texto}</label>
            <select>
                {lista.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                ))}
            </select>
        </div>
    )
}
