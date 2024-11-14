import './css/LandingPage.css'
import Header from './Header'
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';

export default function LandingPage() {
    return (
        <>
            <Header />
            <div id="container-landingpage">
                <div className="apresentacao-landingpage">
                    <h1 className='titulo-landingpage'>My Brief Trends</h1>
                    <p className='slogan-landingpage'>Sua dose diária de tendências para economizar seu tempo</p>
                    <div className="area-entrar">
                        <button id="btn-singin">Cadastrar-se</button>
                        <button id="btn-login">Entrar</button>
                    </div>
                </div>
                <div className="ultimastendencias-landingpage">
                    <h4 className="titulo-ultimastendencias">
                        Últimas tendências
                    </h4>
                    <div className="noticiasrapidas-landingpage">
                        <div className="noticiarapida">
                            <p className='metadata-noticia'>Isabela Oliveira escreveu em 2024-11-12T14:11:08Z</p>
                            <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2024/11/maxresdefault-1.jpg" alt="Noticia 1" />
                            <article>
                                <h5 className="titulonoticia">Gladiador 2: quem do elenco do 1º filme estará na sequência?</h5>
                                <p className="previewnoticia">
                                    Saiba quais atores e personagens do primeiro Gladiador estarão na sequência, que estreia nesta quinta-feira, 14 de novembro, nas salas de cinema do Brasil. Quem do elenco do 1º filme estará na sequência?
                                </p>
                                <footer className="footernoticia">
                                    <cite>Uol.com.br</cite>
                                    <Link to="https://gizmodo.uol.com.br/gladiador-2-quem-do-elenco-do-1o-filme-estara-na-sequencia/" className='link_noticia' target='blank'>
                                        <BsArrowRight />
                                    </Link>
                                </footer>
                            </article>
                        </div>
                        <div className="noticiarapida">
                            <p className='metadata-noticia'>Vinicius Marques escreveu em 2024-11-12T18:47:24Z</p>
                            <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2024/11/swello-cbby8hABJoE-unsplash.jpg" alt="Noticia 2" />
                            <article>
                                <h5 className="titulonoticia">iPhone 17 Air: smartphone pode não ser tão fino quanto se imaginava</h5>
                                <p className="previewnoticia">
                                    A Apple está planejando aposentar a variante Plus de seus iPhones para apostar em um novo modelo, que, segundo rumores, será ultrafino. O novo dispositivo ainda não teve a nomenclatura divulgada ofic…
                                </p>
                                <footer className="footernoticia">
                                    <cite>Uol.com.br</cite>
                                    <Link to="https://gizmodo.uol.com.br/iphone-17-air-smartphone-pode-nao-ser-tao-fino-quanto-se-imaginava/" className='link_noticia' target='blank'>
                                        <BsArrowRight />
                                    </Link>
                                </footer>
                            </article>
                        </div>
                        <div className="noticiarapida">
                            <p className='metadata-noticia'>Isabela Oliveira escreveu em 2024-11-12T16:29:45Z</p>
                            <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2024/11/Snapinsta.app_464450932_1487859155357049_4201554653462589703_n_1080.jpg" alt="Noticia 3" />
                            <article>
                                <h5 className="titulonoticia">Linkin Park no Brasil: onde assistir ao show na TV e no streaming ao vivo</h5>
                                <p className="previewnoticia">
                                    Na próxima sexta-feira (15), a partir das 20h30, o Linkin Park fará o primeiro show da turnê “From Zero World Tour” no Brasil. A apresentação em São Paulo terá a nova vocalista, Emily Armstrong, bem …
                                </p>
                                <footer className="footernoticia">
                                    <cite>Uol.com.br</cite>
                                    <Link to="https://gizmodo.uol.com.br/linkin-park-no-brasil-onde-assistir-ao-show-na-tv-e-no-streaming-ao-vivo/" className='link_noticia' target='blank'>
                                        <BsArrowRight />
                                    </Link>
                                </footer>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}