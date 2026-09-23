import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { lerPerfil, salvarPerfil } from '../perfilLocal'
import './css/Cadastro.css'

export default function EditarPerfil() {
    const navigate = useNavigate()
    const [perfil] = useState(lerPerfil)
    const [erro, setErro] = useState('')

    async function salvar(evento) {
        evento.preventDefault()
        const dados = new FormData(evento.currentTarget)
        const senha = String(dados.get('senha') || '')
        if (senha && senha.length < 8) {
            setErro('A nova senha deve ter pelo menos 8 caracteres.')
            return
        }

        const especialidades = String(dados.get('especialidades') || '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)

        await salvarPerfil({
            nome: String(dados.get('nome') || '').trim(),
            email: String(dados.get('email') || '').trim(),
            telefone: String(dados.get('telefone') || '').trim(),
            cidade: String(dados.get('cidade') || '').trim(),
            descricao: String(dados.get('descricao') || '').trim(),
            especialidades: perfil.tipo === 'prestador' ? especialidades : perfil.especialidades
        }, senha)
        navigate('/Perfil')
    }

    return (
        <div>
            <Link to="/Busca" className="back-btn">← Voltar</Link>
            <div className="page-container">
                <form className="card" onSubmit={salvar}>
                    <h1>Editar Perfil</h1>
                    <div className="form-group"><label htmlFor="editar-nome">Nome completo</label><input id="editar-nome" name="nome" defaultValue={perfil.nome} required /></div>
                    <div className="form-group"><label htmlFor="editar-email">E-mail</label><input id="editar-email" name="email" type="email" defaultValue={perfil.email} /></div>
                    <div className="form-row">
                        <div className="form-group"><label htmlFor="editar-telefone">Telefone</label><input id="editar-telefone" name="telefone" type="tel" defaultValue={perfil.telefone} /></div>
                        <div className="form-group"><label htmlFor="editar-cidade">Cidade</label><input id="editar-cidade" name="cidade" defaultValue={perfil.cidade} /></div>
                    </div>
                    {perfil.tipo === 'prestador' && <div className="form-group"><label htmlFor="editar-especialidades">Especialidades (separadas por vírgula)</label><input id="editar-especialidades" name="especialidades" defaultValue={perfil.especialidades?.join(', ')} /></div>}
                    <div className="form-group"><label htmlFor="editar-descricao">Descrição</label><textarea id="editar-descricao" name="descricao" defaultValue={perfil.descricao} /></div>
                    <div className="form-group"><label htmlFor="editar-senha">Nova senha</label><input id="editar-senha" name="senha" type="password" minLength="8" placeholder="Deixe vazio para manter a atual" /></div>
                    {erro && <p role="alert">{erro}</p>}
                    <button type="submit" className="btn btn-primary btn-full">Salvar alterações</button>
                </form>
            </div>
        </div>
    )
}
