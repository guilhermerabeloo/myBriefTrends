import Header from './Header'
import './css/Home.css'
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { newsapi } from '../lib/api';

export default function Home() {
    const [ minhasNoticias, setMinhasNoticias ] = useState([])

    const navigate = useNavigate();
    const cookie = true;
  
    useEffect(() => {
      if (!cookie) {
        navigate('/landingpage');
      }
    }, [cookie, navigate]);

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
                    pageSize: 20
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

            setMinhasNoticias(noticias)
        }
        getTopNoticias()
    },[])

    return (
        <>
            <Header />
            <div id='conteiner-home'>
                <h3>Minhas noticias</h3>
                <div className="noticias-home">
                    {minhasNoticias.map((noticia, i) => (
                        <div className="noticia" key={i}>
                            <div className="noticia-imagem">
                                <img src={noticia.imagem} alt={`Noticia ${i}`} />
                            </div>
                            <div className="noticia-info">
                                <h4 className="titulonoticia">{noticia.titulo}</h4>
                                <p className="previewnoticia">
                                    {noticia.preview}
                                </p>
                                <footer className="footernoticia">
                                    <cite>{noticia.fonte}</cite>
                                    <Link to={noticia.link} className='link_noticia' target='blank'>
                                        <BsArrowRight />
                                    </Link>
                                </footer>
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </>
    )
}