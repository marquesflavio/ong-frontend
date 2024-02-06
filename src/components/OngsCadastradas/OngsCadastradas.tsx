import { Link } from 'react-router-dom'
import './OngsCadastradas.css'
import { FaArrowCircleLeft } from 'react-icons/fa'
export function OngsCadastradas() {
    return (
        <main className="container">
            <div className="container_icone">
                <Link to="/" className='link'>
                    <FaArrowCircleLeft className="icone" />
                    Voltar para a página inicial
                </Link>
            </div>
            <h1>ONGs Cadastradas</h1>

            <div className='ongs-cadastradas_card'>
                <p className='ongs-cadastradas_p'>Nome: </p>
                <p className='ongs-cadastradas_p'>Imagem: </p>
                <p className='ongs-cadastradas_p'>Segmento: </p>
            </div>
            



        </main>
    )
}