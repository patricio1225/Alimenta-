import { useState } from "react"
function DadosAgricolas() {
    const [pais, setPais] = useState('BR')
    const [dados, setDados] = useState(null)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState('')

    async function consultarDados() {
        setCarregando(true)
        setErro('')
        setDados(null)

        try {
            const resposta = await fetch(
                `https://api.worldbank.org/v2/country/${pais}/indicator/AG.LND.AGRI.ZS?format=json&per_page=10`
            )

            if (!resposta.ok) {
                throw new Error('Não foi possível consultar a API.')
            }

            const json = await resposta.json()

            const resultado = json[1]?.find(
                (item) => item.value !== null
            )

            if (resultado) {
                setDados(resultado)
            } else {
                setErro('Nenhum dado disponível para este país.')
            }

        } catch (erro) {
            setErro('Ocorreu um erro ao consultar os dados.')
        }

        setCarregando(false)
    }
    return (
        <section id="dados" className="py-5">
            <div className="container">

                <div className="text-center mb-4">
                    <h2 className="text-success fw-bold">
                        Dados sobre Agricultura
                    </h2>

                    <p>
                        Consulte informações públicas relacionadas à agricultura
                        e ao desenvolvimento sustentável.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <label htmlFor="pais" className="form-label">
                            Selecione um país:
                        </label>

                        <select
                            id="pais"
                            className="form-select mb-3"
                            value={pais}
                            onChange={(evento) => setPais(evento.target.value)}
                        >
                            <option value="BR">Brasil</option>
                            <option value="AR">Argentina</option>
                            <option value="MX">México</option>
                            <option value="IN">Índia</option>
                        </select>

                        <button
                            className="btn btn-success w-100"
                            onClick={consultarDados}
                        >
                            Consultar dados
                        </button>
                        {carregando && (
                            <p className="text-center mt-3">
                                Carregando dados...
                            </p>
                        )}

                        {erro && (
                            <div className="alert alert-danger mt-3">
                                {erro}
                            </div>
                        )}

                        {dados && (
                            <div className="card mt-4 shadow-sm">
                                <div className="card-body">
                                    <h3 className="h5 text-success">
                                        {dados.country.value}
                                    </h3>

                                    <p>
                                        <strong>Ano:</strong> {dados.date}
                                    </p>

                                    <p>
                                        <strong>Área agrícola:</strong>{' '}
                                        {dados.value.toFixed(2)}% da área territorial
                                    </p>

                                    <small className="text-muted">
                                        Fonte: Banco Mundial
                                    </small>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default DadosAgricolas