import { useState } from 'react'

function Dicas() {
    const dicas = [
        'Planeje suas compras antes de ir ao mercado.',
        'Aproveite cascas, talos e sementes quando forem próprios para consumo.',
        'Armazene os alimentos corretamente para aumentar sua duração.',
        'Verifique os alimentos que já possui antes de comprar novos.',
        'Aproveite as sobras das refeições para criar novas receitas.'
    ]

    const [indice, setIndice] = useState(0)

    function proximaDica() {
        setIndice((indice + 1) % dicas.length)
    }

    return (
        <section id="funcionalidades" className="py-5 bg-light">
            <div className="container text-center">

                <h2 className="text-success fw-bold">
                    Consumo Consciente
                </h2>

                <p className="mb-4">
                    Confira algumas dicas para reduzir o desperdício de alimentos.
                </p>

                <div className="card mx-auto shadow-sm" style={{ maxWidth: '600px' }}>
                    <div className="card-body">

                        <h3 className="h5">Dica sustentável</h3>

                        <p className="card-text">
                            {dicas[indice]}
                        </p>

                        <button
                            className="btn btn-success"
                            onClick={proximaDica}
                        >
                            Próxima dica
                        </button>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Dicas