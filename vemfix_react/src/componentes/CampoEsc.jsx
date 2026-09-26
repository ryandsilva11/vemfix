import { useState } from 'react'

export default function CampoEsc({ texto, opcoes, opc1, opc2, opc3, opc4 }) {
    const [outro, setOutro] = useState(false)
    const lista = opcoes || [opc1, opc2, opc3, opc4].filter(Boolean)

    return (
        <div className="form-group">
            <label>{texto}</label>
            <select onChange={(e) => setOutro(e.target.value === 'Outro')}>
                {lista.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                ))}
            </select>
            {outro && (
                <input
                    type="text"
                    placeholder={`Especifique o ${texto.toLowerCase()}...`}
                    style={{ marginTop: '8px' }}
                />
            )}
        </div>
    )
}
