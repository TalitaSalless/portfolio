import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Projetos } from "./pages/Projetos/Projetos";
import { Home } from "./pages/Home/Home";
import { Contato } from "./pages/Contato/Contato";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route exact path="/projetos" element={ <Projetos /> } />
                <Route exact path="/contato" element={ <Contato /> } />
            </Routes>
        </BrowserRouter>
    );
}
