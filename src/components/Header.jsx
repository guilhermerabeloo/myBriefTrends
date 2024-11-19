import { Link } from 'react-router-dom'
import './css/Header.css'

export default function Header() {
    return (
        <>
            <div id="header">
                <div className="header-superior">
                    <Link to='/administracao'>
                        <button id="btn-administracao">Administração</button>
                    </Link>
                </div>
                <div className="header-inferior">
                    <h3 className="titulo">My Brief Trends</h3>
                </div>
            </div>
        </>
    )
}