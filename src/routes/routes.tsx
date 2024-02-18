import { HashRouter, Route, Routes } from "react-router-dom";
import { PaginaInicial } from "../components/Home/Home";
import { Formulario } from "../components/Form/Form";
import { OngsCadastradas } from "../components/OngCard/OngCard";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/formulario" element={<Form />} />
                <Route path="/ongs-cadastradas" element={<OngsCadastradas />} />
            </Routes>
        </HashRouter>
    )
}

