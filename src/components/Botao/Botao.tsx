import './Botao.css'

interface BotaoProps {
    children : string;
    type: "submit" | "reset" | "button" 
    onClick: () => void
    className?: "botaoPrincipal" | "voltar" | "danger"
}

export function Botao(props : BotaoProps){
    return(
        <button type={props.type}>
            {props.children}
        </button>
    )
}