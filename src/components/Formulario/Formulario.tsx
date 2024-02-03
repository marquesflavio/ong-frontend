import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { OngSchema } from "../../utils/Schemas/FormSchema";
import { Botao } from "../Botao/Botao";
import "./Formulario.css";

type ongFormularioDados = z.infer<typeof OngSchema>

export function Formulario() {

    const { 
        register,
        handleSubmit,
    } = useForm<ongFormularioDados>({resolver : zodResolver(OngSchema)})

    function formularioEnviado(dados: ongFormularioDados){
        console.log(dados)
    }

    return (
        <main className="container">
            <h1>Formulário de Cadastro</h1>
            <form action="" onSubmit={handleSubmit(formularioEnviado)}>
                <div className="form-div">
                    <label className="form-div_label">Insira o nome </label>
                    <input 
                        className="form-div_input" 
                        type="text"
                        {...register("nome")}
                    />
                </div>
                <div className="form-div">
                    <label className="form-div_label">URL de imagem </label>
                    <input 
                        className="form-div_input" 
                        type="text"
                        {...register("imagem")}
                    />
                </div>
                <div className="form-div">
                    <label className="form-div_label">Propósito </label>
                    <input 
                        className="form-div_input" 
                        type="text"
                        {...register("proposito")}
                    />
                </div>
                <Botao children="Cadastrar" />
            </form>
        </main>
    )
}