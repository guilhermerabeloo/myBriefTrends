import './css/LandingPage.css'
import Header from './Header'
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { newsapi } from '../lib/api'


export default function LandingPage() {
    const [ topNoticias, setTopNoticias ] = useState([])

    useEffect(() => {
        async function getTopNoticias() {
            const dataInicio = new Date()
            dataInicio.setDate(dataInicio.getDate() - 3)

            const response = await newsapi.get('/everything', {
                params: {
                    q: 'brasil',
                    from: dataInicio,
                    sortBy: 'relevancy',
                    language: 'pt',
                    pageSize: 4
                }
            })

            const responseNoticias = response.data.articles

            const noticias = responseNoticias.map((n) => {
                const index = (n.description).indexOf("The post")
                const previewFormatado = ((n.description).slice(0, index)).trim();

                const noticia = {
                    autor: n.author,
                    data: n.publishedAt,
                    imagem: n.urlToImage,
                    titulo: n.title,
                    preview: previewFormatado,
                    fonte: n.source.name,
                    link: n.url
                }
    
                return noticia
            })

            setTopNoticias(noticias)
        }
        getTopNoticias()
    },[])

    return (
        <>
            <Header />
            <div id="container-landingpage">
                <div className="apresentacao-landingpage">
                    <h1 className='titulo-landingpage'>My Brief Trends</h1>
                    <p className='slogan-landingpage'>Sua dose diária de tendências para economizar seu tempo</p>
                    <div className="area-entrar">
                        <Link to='/singin'>
                            <button id="btn-singin">Cadastrar-se</button>
                        </Link>
                        <Link to='/login'>
                            <button id="btn-login">Entrar</button>
                        </Link>
                    </div>
                </div>
                <div className="ultimastendencias-landingpage">
                    <h4 className="titulo-ultimastendencias">
                        Últimas tendências
                    </h4>
                    <div className="noticiasrapidas-landingpage">
                        {topNoticias.map((noticia, i) => (
                            <div className="noticiarapida" key={i}>
                                <p className='metadata-noticia'>{noticia.autor} escreveu em {noticia.data}</p>
                                <img src={noticia.imagem} alt={`Noticia ${i}`} />
                                <article>
                                    <h5 className="titulonoticia">{noticia.titulo}</h5>
                                    <p className="previewnoticia">
                                        {noticia.preview}
                                    </p>
                                    <footer className="footernoticia">
                                        <cite>{noticia.fonte}</cite>
                                        <Link to={noticia.link} className='link_noticia' target='blank'>
                                            <BsArrowRight />
                                        </Link>
                                    </footer>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}