<<<<<<< HEAD
import { Link } from "react-router-dom"

export default function PostDo() {
    return (
        <div>
            <Link to="/Busca" className="back-btn">← Voltar</Link>

            <div className="page-container">
                <div className="card">
                    <h1>Criar Post</h1>
                    <p className="card-sub">Compartilhe seu trabalho com a comunidade</p>

                    <div>
                        <div className="form-group">
                            <label>Título (obrigatório)</label>
                            <input type="text" placeholder="Título do seu post" />
                        </div>
                        <div className="form-group">
                            <label>Anexos</label>
                            <div className="upload-box">
                                <div className="upload-icon">🖼️</div>
                                Adicionar Anexos (fotos ou vídeos)
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Descrição (opcional)</label>
                            <textarea placeholder="Descreva seu trabalho..."></textarea>
                        </div>
                        <Link to='/Busca' className="btn btn-primary btn-full btn-space">Publicar Post</Link>
                    </div>
=======
import { Link } from "react-router-dom";

export default function PostDo() {
    return (
        <div className="page-container">
            <div className="card">
                <h1>Criar Post</h1>
                <p className="card-sub">Compartilhe seu trabalho com a comunidade</p>

                <div>
                    <div className="form-group">
                        <label>Título (obrigatório)</label>
                        <input type="text" placeholder="Título do seu post" />
                    </div>
                    <div className="form-group">
                        <label>Anexos</label>
                        <div className="upload-box">
                            <div style={{ fontSize: "32px", marginBottom: "6px" }}>🖼️</div>
                            Adicionar Anexos (fotos ou vídeos)
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descrição (opcional)</label>
                        <textarea placeholder="Descreva seu trabalho..."></textarea>
                    </div>
                    <Link to='/Busca' className="btn btn-primary btn-full" style={{ marginTop: "8px" }}>Publicar Post</Link>
>>>>>>> 73b6004 (att perfil e pdf chat)
                </div>
            </div>
        </div>
    )
}