import "./css/Cadastro.css"
import { Link } from "react-router-dom"
<<<<<<< HEAD
export default function Cadastro() {
=======
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { salvarPerfil } from '../perfilLocal'
export default function Cadastro() {
    const navigate = useNavigate()
    const [outro, setOutro] = useState(false)

    async function cadastrar(evento, tipo) {
        evento.preventDefault()
        const dados = new FormData(evento.currentTarget)
        const especialidades = dados.getAll('especialidades').filter((item) => item !== 'Outro')
        if (dados.has('especialidades') && dados.getAll('especialidades').includes('Outro')) {
            const outra = String(dados.get('outraEspecialidade') || '').trim()
            if (outra) especialidades.push(outra)
        }

        await salvarPerfil({
            tipo,
            nome: String(dados.get('nome') || '').trim(),
            email: String(dados.get('email') || '').trim(),
            telefone: String(dados.get('telefone') || '').trim(),
            cidade: String(dados.get('cidade') || '').trim(),
            descricao: String(dados.get('descricao') || '').trim(),
            especialidades: tipo === 'prestador' ? especialidades : []
        }, String(dados.get('senha') || ''))
        navigate('/Busca')
    }

>>>>>>> 73b6004 (att perfil e pdf chat)
    return (
        <div>
            <Link to="/" className="back-btn">← Voltar</Link>

            <div className="page-container">
                <div className="card">
                    <h1>Crie sua Conta</h1>
                    <p className="card-sub">Rápido e simples — comece em menos de 1 minuto</p>

                    <input type="radio" name="tab" id="tab-opt-c" defaultChecked hidden />
                    <input type="radio" name="tab" id="tab-opt-p" hidden />

                    <div className="tabs">
                        <label htmlFor="tab-opt-c" className="tab">Sou Cliente</label>
                        <label htmlFor="tab-opt-p" className="tab">Sou Prestador</label>
                    </div>

<<<<<<< HEAD
                    {/* CLIENTE */}
                    <div id="tab-c">
                        <div>
                            <div className="form-group"><label>Nome completo</label><input type="text" placeholder="Seu nome" /></div>
                            <div className="form-group"><label>E-mail</label><input type="email" placeholder="seu@email.com" /></div>
                            <div className="form-row">
                                <div className="form-group"><label>Telefone</label><input type="tel" placeholder="(11) 99999-9999" /></div>
                                <div className="form-group"><label>Cidade</label><input type="text" placeholder="Sua cidade" /></div>
=======
                    <form id="tab-c" onSubmit={(evento) => cadastrar(evento, 'cliente')}>
                        <div>
                            <div className="form-group"><label>Nome completo</label><input name="nome" type="text" placeholder="Seu nome" required /></div>
                            <div className="form-group"><label>E-mail</label><input name="email" type="email" placeholder="seu@email.com" required /></div>
                            <div className="form-row">
                                <div className="form-group"><label>Telefone</label><input name="telefone" type="tel" placeholder="(11) 99999-9999" /></div>
                                <div className="form-group"><label>Cidade</label><input name="cidade" type="text" placeholder="Sua cidade" /></div>
>>>>>>> 73b6004 (att perfil e pdf chat)
                            </div>
                            <div className="form-row">
                                <div className="form-group"><label>CPF</label><input type="text" placeholder="000.000.000-00" /></div>
                                <div className="form-group"><label>Data de nascimento</label><input type="date" /></div>
                            </div>
<<<<<<< HEAD
                            <div className="form-group"><label>Senha</label><input type="password" placeholder="Mínimo 8 dígitos" /></div>
=======
                            <div className="form-group"><label>Senha</label><input name="senha" type="password" minLength="8" placeholder="Mínimo 8 dígitos" required /></div>
>>>>>>> 73b6004 (att perfil e pdf chat)

                            <div className="form-terms">
                                <input type="checkbox" id="tc" />
                                <label htmlFor="tc">Concordo com os Termos de Uso e Privacidade</label>
                            </div>

<<<<<<< HEAD
                            <Link to="/" className="btn btn-primary btn-full">Criar Conta</Link>
                            <p className="form-footer">Já tem conta? <Link to="/">Entrar</Link></p>
                        </div>
                    </div>

                    {/* PRESTADOR */}
                    <div id="tab-p">
                        <div>
                            <div className="form-group"><label>Nome completo</label><input type="text" placeholder="Seu nome" /></div>
                            <div className="form-group"><label>E-mail</label><input type="email" placeholder="seu@email.com" /></div>
                            <div className="form-row">
                                <div className="form-group"><label>Telefone</label><input type="tel" placeholder="(11) 99999-9999" /></div>
                                <div className="form-group"><label>Cidade</label><input type="text" placeholder="Sua cidade" /></div>
                            </div>
                            <div className="form-group">
                                <label>Categoria de Serviço</label>
                                <select>
                                    <option>Encanador</option>
                                    <option>Eletricista</option>
                                    <option>Pintor</option>
                                    <option>Jardineiro</option>
                                    <option>Limpeza</option>
                                    <option>Pedreiro</option>
                                    <option>Ar condicionado</option>
                                    <option>Chaveiro</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Breve descrição da experiência</label>
                                <textarea placeholder="Conte um pouco sobre sua experiência..."></textarea>
                            </div>
                            <div className="form-group"><label>Senha</label><input type="password" placeholder="Mínimo 8 dígitos" /></div>
=======
                            <button type="submit" className="btn btn-primary btn-full">Criar Conta</button>
                            <p className="form-footer">Já tem conta? <Link to="/">Entrar</Link></p>
                        </div>
                    </form>

                    <form id="tab-p" onSubmit={(evento) => cadastrar(evento, 'prestador')}>
                        <div>
                            <div className="form-group"><label>Nome completo</label><input name="nome" type="text" placeholder="Seu nome" required /></div>
                            <div className="form-group"><label>E-mail</label><input name="email" type="email" placeholder="seu@email.com" required /></div>
                            <div className="form-row">
                                <div className="form-group"><label>Telefone</label><input name="telefone" type="tel" placeholder="(11) 99999-9999" /></div>
                                <div className="form-group"><label>Cidade</label><input name="cidade" type="text" placeholder="Sua cidade" /></div>
                            </div>
                            <div className="form-group">
                                <label>Especialidades</label>
                                <div className="specialty-options">
                                    {['Encanador', 'Eletricista', 'Pintor', 'Jardineiro', 'Limpeza', 'Pedreiro', 'Ar condicionado', 'Chaveiro', 'Outro'].map((item) => (
                                        <label key={item}><input type="checkbox" name="especialidades" value={item} onChange={item === 'Outro' ? (evento) => setOutro(evento.target.checked) : undefined} /> {item}</label>
                                    ))}
                                </div>
                                {outro && <input name="outraEspecialidade" type="text" placeholder="Digite sua especialidade" required />}
                            </div>
                            <div className="form-group">
                                <label>Breve descrição da experiência</label>
                                <textarea name="descricao" placeholder="Conte um pouco sobre sua experiência..."></textarea>
                            </div>
                            <div className="form-group"><label>Senha</label><input name="senha" type="password" minLength="8" placeholder="Mínimo 8 dígitos" required /></div>
>>>>>>> 73b6004 (att perfil e pdf chat)
                            <div className="form-terms">
                                <input type="checkbox" id="tp" />
                                <label htmlFor="tp">Concordo com os Termos de Uso e Privacidade</label>
                            </div>
<<<<<<< HEAD
                            <Link to="/" className="btn btn-primary btn-full">Criar Conta</Link>
                            <p className="form-footer">Já tem conta? <Link to="/">Entrar</Link></p>
                        </div>
                    </div>
=======
                            <button type="submit" className="btn btn-primary btn-full">Criar Conta</button>
                            <p className="form-footer">Já tem conta? <Link to="/">Entrar</Link></p>
                        </div>
                    </form>
>>>>>>> 73b6004 (att perfil e pdf chat)
                </div>
            </div>
        </div>
    )
}
