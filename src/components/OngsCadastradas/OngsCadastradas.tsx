import './OngsCadastradas.css'
export function OngsCadastradas() {
    return (
        <main className="container">
            <h1>Ongs Cadastradas</h1>

            <div className='ongs-cadastradas_card'>
                <p className='ongs-cadastradas_p'>Nome: </p>
                <p className='ongs-cadastradas_p'>Imagem: </p>
                <p className='ongs-cadastradas_p'>Segmento: </p>
            </div>
            {/* Esses cards serão gerados dinamicamente */}
            <div className='ongs-cadastradas_card'>
                <p className='ongs-cadastradas_p'>Nome: </p>
                <p className='ongs-cadastradas_p'>Imagem: </p>
                <p className='ongs-cadastradas_p'>Segmento: </p>
            </div>

            <div className='ongs-cadastradas_card'>
                <p className='ongs-cadastradas_p'>Nome: </p>
                <p className='ongs-cadastradas_p'>Imagem: </p>
                <p className='ongs-cadastradas_p'>Segmento: </p>
            </div>



        </main>
    )
}