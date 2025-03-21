import { Link } from "react-router-dom";
import "../Header/HeaderStyle.css";

export function Header() {
  return (
    <header className="header">
      {/* <Link to="/" className="header-brand">
        Ts
      </Link> */}

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
    </header>
  );
}


