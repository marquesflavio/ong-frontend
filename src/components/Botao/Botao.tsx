import './Botao.css'

interface BotaoProps {
    children : string;
    type: "submit" | "reset" | "button" 
}

export function Botao(props : BotaoProps){
    return(
        <button className='botaoPrincipal' type={props.type}>
            {props.children}
        </button>
    )
}