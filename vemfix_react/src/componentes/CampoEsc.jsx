<<<<<<< HEAD
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
=======
import { useState } from 'react'

export default function CampoEsc({ texto, opc1, opc2, opc3, opc4 }) {
    const [opcao, setOpcao] = useState(opc1)
    return (
        <div className="form-group">
            <label>{texto}</label>
            <select value={opcao} onChange={(evento) => setOpcao(evento.target.value)}>
                <option>{opc1}</option>
                {opc2 && <option>{opc2}</option>}
                {opc3 && <option>{opc3}</option>}
                {opc4 && <option>{opc4}</option>}
            </select>
            {opcao?.toLowerCase().startsWith('outro') && <input type="text" placeholder="Digite sua opção" />}
>>>>>>> 73b6004 (att perfil e pdf chat)
        </div>
    )
}
