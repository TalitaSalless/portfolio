import { Card } from "../Card/Card";
import { CardsContainer } from "./CardsStyles";

export function Cards() {
  return (
    <CardsContainer>
      <Card
        projectName="Projeto Marvel"
        projectImage="https://github.com/TalitaSalless/Projeto-Marvel-DevWeek/raw/main/fullpage-projeto.png"
        projectLink="https://talitasalless.github.io/Projeto-Marvel-DevWeek/"
        githubLink="https://github.com/TalitaSalless/Projeto-Marvel-DevWeek"
        projectDescription="Aplicação desenvolvida em React que consome a API da Marvel para exibir informações detalhadas sobre personagens icônicos. A interface é dinâmica e responsiva, proporcionando uma experiência interativa. Utiliza Axios para requisições e Styled-components para uma estilização moderna e reutilizável."
      />
      <Card
        projectName="Pokémon"
        projectImage="https://github.com/TalitaSalless/Pokemon/raw/main/public/screen.png"
        projectLink="https://github.com/TalitaSalless/Pokemon"
        githubLink="https://github.com/TalitaSalless/Pokemon"
        projectDescription="Aplicação web em React que utiliza a PokéAPI para buscar e exibir informações sobre os Pokémon. A interface é responsiva e interativa, utilizando Axios para as requisições e Styled-components para uma estilização eficiente. O projeto demonstra a integração com APIs externas e a construção de interfaces dinâmicas com React."
      />
      <Card
        projectName="UI - Twitter"
        projectImage="https://github.com/TalitaSalless/ui-twitter/blob/main/screencapture0.png?raw=true"
        githubLink="https://github.com/TalitaSalless/ui-twitter"
        projectDescription="Interface recriada do Twitter utilizando HTML, CSS e JavaScript. Focado na construção de um layout responsivo e estilizado, sem funcionalidades backend, apenas a parte visual da rede social."
      />
      <Card
        projectName="Projeto SASS"
        projectImage="https://github.com/TalitaSalless/Projeto-SASS/blob/main/screen1.png?raw=true"
        githubLink="https://github.com/TalitaSalless/Projeto-SASS"
        projectDescription="Aplicação que utiliza SASS para estilização, focando em técnicas de organização e reutilização de código CSS. A aplicação é responsiva e demonstra o poder do SASS em projetos de maior escala."
      />
      <Card
        projectName="Landing Page Agência"
        projectImage="https://github.com/TalitaSalless/landing-page-agencia/raw/main/images/talitasalless.github.io_landing-page-agencia_.png"
        projectLink="https://talitasalless.github.io/landing-page-agencia/"
        githubLink="https://github.com/TalitaSalless/landing-page-agencia"
        projectDescription="Página estática desenvolvida com HTML, CSS e JavaScript, focada na criação de uma página de apresentação para uma agência. Utiliza técnicas de design responsivo e animações para melhorar a experiência do usuário."
      />
      <Card
        projectName="Buscador de usuários no Github"
        projectImage="https://github.com/TalitaSalless/buscador-de-usuarios-github/blob/main/screencapture.png?raw=true"
        projectLink="https://talitasalless.github.io/buscador-de-usuarios-github/"
        githubLink="https://github.com/TalitaSalless/buscador-de-usuarios-github"
        projectDescription="Aplicação desenvolvida em JavaScript que consome a GitHub API para buscar e exibir informações detalhadas sobre usuários. Utiliza Axios para requisições, tem uma interface interativa e dinâmica, permitindo uma busca rápida por perfis e projetos. Ideal para quem deseja explorar dados do GitHub de forma prática e visual."
      />
    </CardsContainer>
  );
}
