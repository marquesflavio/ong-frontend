import { Link } from "react-router-dom";
import { Botao } from "../Botao/Botao";
import "../Botao/Botao.css";
import "./PaginaInicial.css";

export function PaginaInicial() {
  return (
    <main className="container">
      <h1>Bem vindo a página inicial!</h1>
      <h3>Selecione a opção desejada: </h3>
      <div className="container_div">
        <p>Desejo cadastrar uma nova instituição</p>
        <Link to="/formulario">
          <Botao
            className="botaoPrincipal"
            onClick={() => {}}
            type="button"
            children="Cadastrar"
          />
        </Link>
      </div>
      <div className="container_div">
        <p>Desejo ver ou editar as instituições cadastradas</p>
        <Link to="/ongs-cadastradas">
          <Botao
            className="botaoPrincipal"
            onClick={() => {}}
            type="button"
            children="Visualizar"
          />
        </Link>
      </div>
    </main>
  );
}
