import "./css/login.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";

export default function Login() {
    const navigate = useNavigate();
    const cookie = true;
  
    useEffect(() => {
      if (cookie) {
        navigate('/home');
      }
    }, [cookie, navigate]);

    return (
        <>
            <Header />
            <div id="container-login">
                <div className="apresentacao-login">
                    <h1 className='titulo-login'>My Brief Trends</h1>
                    <p className='slogan-login'>Sua dose diária de tendências para economizar seu tempo</p>
                </div>
                <div className="area-login">
                    <form action="submit" id="form-login">
                        <h4 className="titulo-formlogin">Entrar na sua conta</h4>
                        <div className="form-grupoinputs">
                            <div className="input">
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email"/>
                            </div>
                            <div className="input">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" id="senha" name="senha"/>
                            </div>
                        </div>
                        <button id="btn-confirmarlogin">Entrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}