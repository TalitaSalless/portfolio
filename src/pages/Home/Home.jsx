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
                            Como desenvolvedora, tenho experiência com HTML, CSS, JavaScript e React, além de sólidos conhecimentos em UI/UX, consumo de APIs REST, Git e metodologias ágeis. Tenho investido constantemente no aprimoramento técnico com tecnologias como TypeScript, Tailwind CSS e testes automatizados.

                            Neste portfólio, você encontrará projetos que refletem não só minhas habilidades técnicas, mas também meu compromisso com a evolução contínua, minha criatividade e meu propósito: construir produtos digitais com impacto, propósito e qualidade.

                            Se quiser conversar ou conhecer mais sobre meu trabalho, será um prazer trocar ideias com você!

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
