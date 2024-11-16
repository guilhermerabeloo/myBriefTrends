import Header from "./Header";
import "./css/singin.css"

export default function Singin() {
    return (
        <>
            <Header />
            <div id="container-singin">
                <div className="apresentacao-singin">
                    <h1 className='titulo-singin'>My Brief Trends</h1>
                    <p className='slogan-singin'>Sua dose diária de tendências para economizar seu tempo</p>
                </div>
                <div className="area-singin">
                    <form action="submit" id="form-singin">
                        <h4 className="titulo-formsingin">Crie sua conta</h4>
                        <div className="form-grupoinputs">
                            <div className="input">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email"/>
                            </div>
                            <div className="input">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" name="senha"/>
                            </div>
                            <div className="input">
                                <label htmlFor="repetirSenha">Digite sua senha novamente</label>
                                <input type="password" id="repetirSenha" name="repetirSenha"/>
                            </div>
                        </div>
                        <div className="interesses">
                            <label>Selecione seus principais interesses:</label>
                            <div>
                                <label><input type="checkbox" value="futebol" /> Futebol</label>
                            </div>
                            <div>
                                <label><input type="checkbox" value="tecnologia" /> Tecnologia</label>
                            </div>
                            <div>
                                <label><input type="checkbox" value="culturapop" /> Cultura pop</label>
                            </div>
                            <div>
                                <label><input type="checkbox" value="promocoes" /> Promoções</label>
                            </div>
                            <div>
                                <label><input type="checkbox" value="musica" /> Música</label>
                            </div>
                            <div>
                                <label><input type="checkbox" value="noticias" /> Notícias</label>
                            </div>
                        </div>
                        <button id="btn-confirmarsingin">Criar conta</button>
                    </form>
                </div>
            </div>
        </>
    )
}