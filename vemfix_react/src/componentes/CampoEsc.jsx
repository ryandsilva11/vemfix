export default function CampoEsc({ texto, opc1, opc2, opc3, opc4 }) {
    return (
        <div className="form-group">
            <label>{texto}</label>
            <select>
                <option>{opc1}</option>
                <option>{opc2}</option>
                <option>{opc3}</option>
                <option>{opc4}</option>
            </select>
        </div>
    )
}
