import { Botao } from '../Botao/Botao'
import './PaginaInicial.css'
export function PaginaInicial() {
    return (
        <main className="container">
            <h1>Bem vindo a página inicial!</h1>

            <h3>Selecione a opção desejada: </h3>

            <div>
                <p>Desejo cadastrar uma nova instituição</p>
                <Botao children='Cadastrar' />
            </div>
            <div>
                <p>Desejo ver ou editar as instituições cadastradas</p>
                <Botao children='Visualizar' />
            </div>



        </main>
    )
}