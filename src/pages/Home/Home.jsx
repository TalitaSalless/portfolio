import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
// import { TypedName } from "../../components/TypedName/TypedName";
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
                        {/* <h1> Olá, eu sou <TypedName /></h1> */}
                        <h1>Desenvolvedora Front-end</h1>
                    </ProfileSection>

                    <AboutSection>
                        <AboutText>
                            <h1>Sobre mim</h1>
                            <p>
                            Sou desenvolvedora front-end em formação, com forte interesse em JavaScript e React.js. Tenho experiência prática em HTML, CSS, e JavaScript, além de consumo de APIs REST e controle de versões com Git/GitHub. Busco sempre aprimorar minhas habilidades, especialmente em React, trabalhando com Hooks, Context API e React Router, e explorando novas tecnologias como TypeScript e Next.js. Com foco em criar interfaces modernas, responsivas e acessíveis, meu objetivo é desenvolver soluções eficientes que ofereçam uma experiência de usuário excepcional.
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
