import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "../Button/Button.css";
import "./PaginaInicial.css";

export function PaginaInicial() {
  return (
    <main className="container">
      <h1>Bem vindo a página inicial!</h1>
      <h3>Selecione a opção desejada: </h3>
      <div className="container_div">
        <p>Desejo cadastrar uma nova instituição</p>
        <Link to="/formulario">
          <Button
            className="botaoPrincipal"
            type="button"
            onClick={() => { }}
          >Cadastrar</Button>
        </Link>
      </div>
      <div className="container_div">
        <p>Desejo ver ou editar as instituições cadastradas</p>
        <Link to="/ongs-cadastradas">
          <Button
            className="botaoPrincipal"
            type="button"
            onClick={() => { }}
          >Visualizar</Button>
        </Link>
      </div>
    </main>
  );
}
