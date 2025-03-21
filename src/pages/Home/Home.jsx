import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./HomeStyle.css";
import Foto from "../../assets/Me.jpg";

export function Home() {
    return (
        <>
            <Header />
            <main className="container-home">
                <div className="container-infos">
                    <div className="about-section">
                        <div className="about-text">
                            <p>
                                Desenvolvedora Front-end em formação, com foco em JavaScript e React. Possuo conhecimento em desenvolvimento de interfaces modernas, responsivas e acessíveis, utilizando boas práticas.
                                Atualmente, curso Gestão da Tecnologia da Informação, o que amplia minha visão estratégica sobre tecnologia e negócios. Busco constantemente aprimorar minhas habilidades por meio de projetos práticos e aprofundamento em padrões de desenvolvimento.
                            </p>
                            <div className="icon-container">
                                <i className="fab fa-html5"></i>
                                <i className="fab fa-css3-alt"></i>
                                <i className="fab fa-sass"></i>
                                <i className="fab fa-styled-components"></i>
                                <i className="fab fa-js"></i>
                                <i className="fab fa-react"></i>
                                <i className="fab fa-figma"></i>
                                <i className="fab fa-npm"></i>
                                <i className="fab fa-vite"></i>
                                <i className="fab fa-git"></i>
                                <i className="fab fa-python"></i>
                                <i className="fas fa-database"></i>
                            </div>
                        </div>
                    </div>

                    <div className="profile-section">
                        <img src={Foto} />
                        <h1>Desenvolvedora front-end</h1>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
