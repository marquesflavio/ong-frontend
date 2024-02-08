import { Botao } from "../../components/Botao/Botao";

export const mensagemDeAlerta = () => {
    return (
        <div>
            <p>Tem certeza que deseja cancelar?</p>
            <Botao className='voltar' type="button" children="Voltar" onClick={() => { }} />
            <Botao className='danger' type="button" children="Apagar os dados" onClick={() => { }} />
        </div>
    );
}
