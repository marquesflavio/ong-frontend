import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OngSchema } from "../../utils/Schemas/FormSchema";
import { Botao } from "../Botao/Botao";
import "./Formulario.css";
import { useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { mensagemDeSucesso } from "../../utils/Alertas/MensagemDeSucesso";

type ongFormularioDados = z.infer<typeof OngSchema>

export function Formulario() {
    const [output, setOutput] = useState('');

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ongFormularioDados>({ resolver: zodResolver(OngSchema) })

    function formularioEnviado(dados: ongFormularioDados) {
        setOutput(JSON.stringify(dados, null, 2));
        mensagemDeSucesso();
        reset();
    }

    return (
        <main className="container">
            <div className="container_icone">
                <Link to="/">
                    <FaArrowCircleLeft className="icone" />
                    Voltar para a página inicial
                </Link>
            </div>
            <h1>
                Formulário de Cadastro
            </h1>
            <form action="" onSubmit={handleSubmit(formularioEnviado)}>
                <div className="form-div">
                    <label className="form-div_label">Insira o nome </label>
                    <input
                        className="form-div_input"
                        type="text"
                        {...register("nome")}
                    />
                    {errors.nome && <span className="erro">{errors.nome.message}</span>}
                </div>
                <div className="form-div">
                    <label className="form-div_label">URL de imagem </label>
                    <input
                        className="form-div_input"
                        type="text"
                        {...register("imagem")}
                    />
                    {errors.imagem && <span className="erro">{errors.imagem.message}</span>}
                </div>
                <div className="form-div">
                    <label className="form-div_label">Propósito </label>
                    <input
                        className="form-div_input"
                        type="text"
                        {...register("proposito")}
                    />
                    {errors.proposito && <span className="erro">{errors.proposito.message}</span>}
                </div>
                <Botao
                    type="submit"
                    children="Cadastrar"
                />
            </form>
            <pre>{output}</pre>
        </main>
    )
}