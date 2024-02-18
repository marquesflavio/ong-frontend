import { MdArrowBackIos } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import "react-toastify/dist/ReactToastify.css";
import { mensagemDeSucesso } from "../../utils/Alertas/MensagemDeSucesso";
import { OngSchema } from "../../utils/Schemas/FormSchema";
import { Button } from "../Button";
import "./Form.css";
import "../Button/Button.css";

type ongFormData = z.infer<typeof OngSchema>;

export function Formulario() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ongFormData>({ resolver: zodResolver(OngSchema) });

  function formularioEnviado(dados: ongFormData) {
    setOutput(JSON.stringify(dados, null, 2));
    mensagemDeSucesso();
    reset();
  }

  return (
    <section className="container">
      <div className="container_icone">
        <Link to="/" className="link">
          <MdArrowBackIos className="icone" />
        </Link>
      </div>
      <h1 className="container_h1">Cadastrar organizações</h1>
      <div className="container_info">
        <p>
          Nessa seção é possível cadastrar Ongs...Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Provident sint voluptatem sed laudantium
          officiis, veritatis enim libero mollitia tenetur eligendi autem
          accusamus fugiat repellat. Ad repellat nam ea earum quaerat.
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSubmit(formularioEnviado)}
        className="form"
      >
        {/* //@ se você quiser isso poderia ser um componente, para abstrair a repetição, pode por exemplo já tratar a mensagem de erro. */}
        {/* //@ se fosse componentizar pode ainda usar composition, para compor as partes e deixar mais flexível e performático, mas e poder usar o register de forma mais fácil */}
        {/* //________________ */}
        <div className="form-div">
          <label className="form-div_label">Insira o nome </label>
          <input className="form-div_input" type="text" {...register("nome")} />
          {errors.nome && <span className="erro">{errors.nome.message}</span>}
        </div>
        {/* //________________ */}

        <div className="form-div">
          <label className="form-div_label">URL de imagem </label>
          <input
            className="form-div_input"
            type="text"
            {...register("imagem")}
          />
          {errors.imagem && (
            <span className="erro">{errors.imagem.message}</span>
          )}
        </div>
        <div className="form-div">
          <label className="form-div_label">Propósito </label>
          <input
            className="form-div_input"
            type="text"
            {...register("proposito")}
          />
          {errors.proposito && (
            <span className="erro">{errors.proposito.message}</span>
          )}
        </div>
        <Button
          type="submit"
          children="Cadastrar"
          onClick={() => {}}
          className="botaoPrincipal"
        />
      </form>
      <pre>{output}</pre>
    </section>
  );
}
