import { Card } from "../Card/Card";
import "./CardsStyle.css";

export function Cards() {
  return (
    <div className="cards">
      <Card
        projectName="Projeto Marvel"
        projectImage="https://github.com/TalitaSalless/Projeto-Marvel-DevWeek/raw/main/fullpage-projeto.png"
        projectLink="https://talitasalless.github.io/Projeto-Marvel-DevWeek/"
        githubLink="https://github.com/TalitaSalless/Projeto-Marvel-DevWeek"
      />
      <Card
        projectName="Pokémon"
        projectImage="https://github.com/TalitaSalless/Pokemon/raw/main/public/screen.png"
        projectLink="https://github.com/TalitaSalless/Pokemon"
        githubLink="https://github.com/TalitaSalless/Pokemon"
      />
      <Card
        projectName="Landing Page Agência "
        projectImage="https://github.com/TalitaSalless/landing-page-agencia/raw/main/images/talitasalless.github.io_landing-page-agencia_.png"
        projectLink="https://talitasalless.github.io/landing-page-agencia/"
        githubLink="https://github.com/TalitaSalless/landing-page-agencia"
      />
      <Card
        projectName="Buscador de usuários no Github"
        projectImage="https://github.com/TalitaSalless/buscador-de-usuarios-github/blob/main/screencapture.png?raw=true"
        projectLink="https://talitasalless.github.io/buscador-de-usuarios-github/"
        githubLink="https://github.com/TalitaSalless/buscador-de-usuarios-github"
      />
      <Card
        projectName="UI - Twitter"
        projectImage="https://github.com/TalitaSalless/ui-twitter/blob/main/screencapture0.png?raw=true"
        // projectLink="https://github.com/TalitaSalless/ui-twitter"
        githubLink="https://github.com/TalitaSalless/ui-twitter"
      />
      <Card
        projectName="Projeto SASS"
        projectImage="https://github.com/TalitaSalless/Projeto-SASS/blob/main/screen1.png?raw=true"
        // projectLink=""
        githubLink="https://github.com/TalitaSalless/Projeto-SASS"
      />
    </div>
  );
}
