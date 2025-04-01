import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderName,
  HeaderBrand,
  HeaderNavbar,
  NavbarList,
  NavbarItem,
  SocialMediaContainer,
  SocialMediaList,
  SocialMediaItem,
} from "./HeaderStyles";

const GITHUB_URL = "https://github.com/TalitaSalless";
const EMAIL_URL = "mailto:talitasalles93@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/talita-salles/";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <HeaderName>
          <HeaderBrand to="/">Talita Salles</HeaderBrand>
        </HeaderName>
      </div>

      {/* Navegação */}
      <HeaderNavbar>
        <NavbarList>
          <NavbarItem>
            <Link to="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/projetos">Projetos</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/contato">Contato</Link>
          </NavbarItem>
        </NavbarList>
      </HeaderNavbar>

      {/* Redes sociais */}
      <SocialMediaContainer>
        <SocialMediaList>
          <SocialMediaItem>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </SocialMediaItem>
          <SocialMediaItem>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </SocialMediaItem>
        </SocialMediaList>
      </SocialMediaContainer>
    </HeaderContainer>
  );
}
