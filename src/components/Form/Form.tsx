import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { mensagemDeSucesso } from "../../utils/Alertas/MensagemDeSucesso";
import { OngSchema } from "../../utils/Schemas/FormSchema";
import { Button } from "../Button/Button";
import "./Form.css";
import axios from "axios"

const baseURL = "https://65c1f4b1f7e6ea59682a235d.mockapi.io/api/v1"

type ongFormularioDados = z.infer<typeof OngSchema>;

export function Form() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ongFormularioDados>({ resolver: zodResolver(OngSchema) });

  function formularioEnviado(dados: ongFormularioDados) {
    axios.post(`${baseURL}/ongs`, dados).then((response) => {
      console.log('resposta do servidor: ', response)
    })
    .catch((error) => {
      console.log("Erro: ", error)
    })
    setOutput(JSON.stringify(dados, null, 2));
    mensagemDeSucesso();
    reset();
  }

  return (
    <section className="container">
      <div className="container_icone">
        <Link to="/" className="link">
          <FaArrowCircleLeft className="icone" />
          Voltar para a página inicial
        </Link>
      </div>
      <h1>Formulário de Cadastro</h1>
      <form action="" onSubmit={handleSubmit(formularioEnviado)}>
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
          onClick={() => { }}
          className="botaoPrincipal"
        >Cadastrar</Button>
      </form>
      <pre>{output}</pre>
    </section>
  );
}
