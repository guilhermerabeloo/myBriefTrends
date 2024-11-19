import { useEffect, useState } from 'react'
import './css/Administracao.css'
import Header from './Header'
import { BsBackspace, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


export default function Administracao() {
    const navigate = useNavigate();
    const cookie = true;
  
    useEffect(() => {
      if (!cookie) {
        navigate('/landingpage');
      }
    }, [cookie, navigate]);

    const [ usuarios, setUsuarios ] = useState([
        {id: 1, nome: 'Guilherme', login: 'guilhermerabelo699@gmail.com', datacadastro: '2024-11-18'},
        {id: 2, nome: 'Teste', login: 'teste@email.com', datacadastro: '2024-11-18'}
    ])

    const editaUsuario = (event) => {
        const idUsuario = event.currentTarget.getAttribute('value')

        const usuarioEditado = usuarios.find(u => u.id = idUsuario)

        console.log('Usuario editado ', usuarioEditado)
    }

    const removeUsuario = (event) => {
        const idUsuario = event.currentTarget.getAttribute('value')

        const usuarioRemovido = usuarios.find(u => u.id = idUsuario)

        console.log('Usuario editado ', usuarioRemovido)
    }

    return (
        <>
            <Header />
            <div id="conteiner-administracao">
                <h3>Usuários cadastrados</h3>
                <div className="area-tabelausuarios">
                    <table id="tabela-usuarios">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Login</th>
                                <th>Data cadastro</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario, i) => (
                                <tr id={usuario.id} key={i}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.login}</td>
                                    <td>{usuario.datacadastro}</td>
                                    <td className='area-acao'><button className='editar' value={usuario.id} onClick={(event) => editaUsuario(event)}><BsPencilSquare /></button></td>
                                    <td className='area-acao'><button className='excluir' value={usuario.id} onClick={(event) => removeUsuario(event)}><BsBackspace /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}