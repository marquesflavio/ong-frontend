import { HashRouter, Route, Routes } from "react-router-dom";
import { Form } from "../components/Form/index";
import { Home } from "../components/Home/index";
import { OngCard } from "../components/OngCard/index";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home /> } />
                <Route path="/formulario" element={<Form />} />
                <Route path="/ongs-cadastradas" element={<OngCard />} />
            </Routes>
        </HashRouter>
    )
}

