import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

import {
    ContainerHome,
    ContainerInfos,
    AboutSection,
    ProfileSection,
    AboutText,
    IconContainer,
    ProfileImage,
} from './HomeStyles';

export function Home() {
    return (
        <>
            <Header />
            <ContainerHome>
                <ContainerInfos>
                    <ProfileSection>
                        <ProfileImage src="/assets/Me.jpg" />
                        <h1>Desenvolvedora front-end</h1>
                    </ProfileSection>

                    <AboutSection>
                        <AboutText>
                            <h1>Sobre mim</h1>
                            <p>
                                Desenvolvedora Front-end em formação, com foco em JavaScript e React. Possuo conhecimento em desenvolvimento de interfaces modernas, responsivas e acessíveis, utilizando boas práticas.
                                Atualmente, curso Gestão da Tecnologia da Informação, o que amplia minha visão estratégica sobre tecnologia e negócios. Busco constantemente aprimorar minhas habilidades por meio de projetos práticos e aprofundamento em padrões de desenvolvimento.
                            </p>
                            <p>Habilidades</p>
                            <IconContainer>
                                <i className="fab fa-html5"></i>
                                <i className="fab fa-css3-alt"></i>
                                <i className="fab fa-js"></i>
                                <i className="fab fa-react"></i>
                                <i className="fab fa-sass"></i>
                                <i className="fab fa-figma"></i>
                                <i className="fab fa-npm"></i>
                                <i className="fab fa-vite"></i>
                                <i className="fab fa-git"></i>
                                <i className="fab fa-python"></i>
                                <i className="fas fa-database"></i>
                            </IconContainer>
                        </AboutText>
                    </AboutSection>
                </ContainerInfos>
            </ContainerHome>
            <Footer />
        </>
    );
}
