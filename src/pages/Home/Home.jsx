import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./HomeStyle.css";
import Foto from "../../assets/Foto.png";

export function Home() {
  return (
    <>
      <Header />
      <main className="container-home">
        <div className="container-infos">
          <div className="profile-section">
            <img src={Foto} />
            <h1>Desenvolvedora front-end</h1>
          </div>

          <div className="about-section">
            <p>
              Sou apaixonada por criar soluções inovadoras e elegantes para a
              web, com experiência em HTML, CSS, JavaScript, React e TypeScript.
              Formada em Análise e Desenvolvimento de Sistemas, com
              especialização em Ciência de Dados. Sou dedicada, criativa,
              comunicativa e flexível, sempre em busca de aprender novas
              ferramentas e metodologias. Valorizo o trabalho em equipe e adoro
              enfrentar desafios. Meu objetivo é contribuir para projetos de
              qualidade e impacto, atendendo às necessidades dos clientes e
              usuários.
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
      </main>
      <Footer />
    </>
  );
}
