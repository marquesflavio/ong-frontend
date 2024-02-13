import { HashRouter, Route, Routes } from "react-router-dom";
import { PaginaInicial } from "../components/PaginaInicial/PaginaInicial";
import { Form } from "../components/Form/Form";
import { OngsCadastradas } from "../components/OngsCadastradas/OngsCadastradas";

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

