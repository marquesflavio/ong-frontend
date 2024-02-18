import "./Home.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export function PaginaInicial() {
  return (
    <section className="container">
      <h1 className="container_h1">Bem vindo ao "nome do site/aplicação"</h1>
      <div className="container_info">
        <p>Qual o propósito dessa aplicação?</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid nisi beatae. Aperiam tempora soluta laboriosam quod, recusandae, mollitia consequatur odit quibusdam, libero facilis laborum est? Laborum ad perspiciatis iste.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sint voluptatem sed laudantium officiis, veritatis enim libero mollitia tenetur eligendi autem accusamus fugiat repellat. Ad repellat nam ea earum quaerat.
        </p>
      </div>
      <div className="container_div_actions">
        <div className="container_div">
          <p>Cadastrar uma nova instituição</p>
          <Link to="/formulario">
            <Button
              className="botaoPrincipal"
              onClick={() => { }}
              type="button"
              >
              {"Cadastrar"}
              </Button>
          </Link>
        </div>
        <div className="container_div">
          <p>Visualizar as instituições cadastradas</p>
          <Link to="/ongs-cadastradas">
            <Button
              className="botaoPrincipal"
              onClick={() => { }}
              type="button"
              children="Visualizar"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
