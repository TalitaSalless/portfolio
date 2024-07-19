import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./HomeStyle.css";
import Foto from "../../assets/Foto.png";

export function Home() {
  return (
    <>
    <Header />
      <main className="container-home" >

        <div className="container-infos">
          <div className="profile-section">
            <img src={Foto} alt="" />
            <h1>Desenvolvedora front-end</h1>
          </div>

          <div className="about-section">
            <p>Sou desenvolvedora front-end, apaixonada por criar soluções inovadoras e elegantes para a web. Tenho experiência com as principais tecnologias do mercado, como HTML, CSS, JavaScript, React, TypeScript. Formada em análise e desenvolvimento de sistemas e curso de especialização em ciência de dados. Sou uma profissional dedicada, criativa, comunicativa e flexível, estou sempre em busca de atualizações para aprender novas ferramentas e metodologias, facilidade para o trabalho em equipe e para enfrentar desafios. Meu objetivo é contribuir para o desenvolvimento de projetos de qualidade e impacto, que atendam às necessidades dos clientes e usuários.</p>
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
