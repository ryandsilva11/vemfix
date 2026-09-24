import "./css/Cadastro.css"
import { Link } from "react-router-dom"
export default function Cadastro() {
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

                    {/* CLIENTE */}
                    <div id="tab-c">
                        <div>
                            <div className="form-group"><label>Nome completo</label><input type="text" placeholder="Seu nome" /></div>
                            <div className="form-group"><label>E-mail</label><input type="email" placeholder="seu@email.com" /></div>
                            <div className="form-row">
                                <div className="form-group"><label>Telefone</label><input type="tel" placeholder="(11) 99999-9999" /></div>
                                <div className="form-group"><label>Cidade</label><input type="text" placeholder="Sua cidade" /></div>
                            </div>
                            <div className="form-row">
                                <div className="form-group"><label>CPF</label><input type="text" placeholder="000.000.000-00" /></div>
                                <div className="form-group"><label>Data de nascimento</label><input type="date" /></div>
                            </div>
                            <div className="form-group"><label>Senha</label><input type="password" placeholder="Mínimo 8 dígitos" /></div>

                            <div className="form-terms">
                                <input type="checkbox" id="tc" />
                                <label htmlFor="tc">Concordo com os Termos de Uso e Privacidade</label>
                            </div>

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
                            <div className="form-terms">
                                <input type="checkbox" id="tp" />
                                <label htmlFor="tp">Concordo com os Termos de Uso e Privacidade</label>
                            </div>
                            <Link to="/" className="btn btn-primary btn-full">Criar Conta</Link>
                            <p className="form-footer">Já tem conta? <Link to="/">Entrar</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
