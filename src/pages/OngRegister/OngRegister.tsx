import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { OngSchema, ongFormData } from "../../Schemas";
import { Button } from "../../components";
import { ThrowMessage } from "../../helpers";
import "./OngRegister.css";

export function OngRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ongFormData>({ resolver: zodResolver(OngSchema) });

  //@ essa função deveria estar na camada de serviço assim como o try-catch
  async function formularioEnviado(dados: ongFormData) {
    try {
      const response = await fetch(
        "https://65c1f4b1f7e6ea59682a235d.mockapi.io/api/v1/ongs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados.");
      }

      const responseData = await response.json();
      console.log("Resposta do servidor:", responseData);
      ThrowMessage({
        icon: "success",
        title: "Parabéns!",
        text: "Dados cadastrados com sucesso!",
      });
      reset();
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
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
    </section>
  );
}
