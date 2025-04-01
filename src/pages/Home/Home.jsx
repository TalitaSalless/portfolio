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
                    </ProfileSection>

                    <AboutSection>
                        <AboutText>
                            <h1>Desenvolvedora front-end</h1>
                            <p>
                            Com sólida experiência em JavaScript, React.js, HTML, CSS e APIs REST, sou apaixonada por criar interfaces modernas, responsivas e acessíveis, sempre focando em proporcionar uma excelente experiência para o usuário. Trabalho com as melhores práticas de desenvolvimento e estou comprometida em entregar soluções eficientes e de alta qualidade.
                            </p>
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
