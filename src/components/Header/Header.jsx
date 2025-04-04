import { Link } from "react-router-dom";
import {
    HeaderContainer,
    HeaderName,
    HeaderBrand,
    HeaderNavbar,
    NavbarList,
    NavbarItem,
} from "./HeaderStyles";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <HeaderName>
                    <HeaderBrand to="/">Talita Salles</HeaderBrand>
                </HeaderName>
            </div>

            <HeaderNavbar>
                <NavbarList>
                    <NavbarItem>
                        <Link to="/" className="active">
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
        </HeaderContainer>
    );
}
