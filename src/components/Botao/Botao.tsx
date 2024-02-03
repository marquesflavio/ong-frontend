import './Botao.css'

interface BotaoProps {
    children : string;
}

export function Botao(props : BotaoProps){
    return(
        <button className='botaoPrincipal'>
            {props.children}
        </button>
    )
}