import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, OngCard, OngRegister } from "../pages";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-ong" element={<OngRegister />} />
        <Route path="/list" element={<OngCard />} />
      </Routes>
    </BrowserRouter>
  );
}

/*
! TODOS:
!   1 - Criar um header para a aplicação e usar o react-router-dom para exibir esse header na aplicação toda.
!   2 - Criar um footer para a aplicação e usar o react-router-dom para exibir esse header na aplicação toda.
!   3 - A página home precisa conter a listagem das ongs diretamente
!   4 - O header precisa ter um botão de adicionar que leve a página de criação
!   5 - toda chamada precisa estar na camada de services e apenas ser chamada no componente
*/
