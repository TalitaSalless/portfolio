import { Link } from "react-router-dom";
import "../Header/HeaderStyle.css";

// Constantes para os URLs das redes sociais e classes de ícones
const GITHUB_URL = "https://github.com/TalitaSalless";
const EMAIL_URL = "mailto:talitasalles93@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/talita-salles/";

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-brand">
        Talita Salles
      </Link>

      {/* Navegação */}
      <nav className="header-navbar">
        <ul>
          <li>
            <Link to={`/`} className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to={`/projetos`}>Projetos</Link>
          </li>
          <li>
            <Link to={`/contato`}>Contato</Link>
          </li>
        </ul>
      </nav>

      <div className="header-social-media">
        <ul>
          <li>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}


