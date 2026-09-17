import { useState } from 'react'

function Participar() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [sucesso, setSucesso] = useState(false)

  function enviarFormulario(evento) {
    evento.preventDefault()

    if (nome.trim() === '' || email.trim() === '') {
      setMensagem('Por favor, preencha todos os campos.')
      setSucesso(false)
      return
    }

    setMensagem(`Obrigado, ${nome}! Sua participação foi registrada.`)
    setSucesso(true)

    setNome('')
    setEmail('')
  }

  return (
    <section id="participar" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-4">
          <h2 className="text-success fw-bold">
            Faça Parte da Rede
          </h2>

          <p>
            Junte-se ao Alimenta+ e faça parte dessa iniciativa
            de conscientização sobre alimentação e sustentabilidade.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">

            <div className="card shadow-sm">
              <div className="card-body p-4">

                <form onSubmit={enviarFormulario}>

                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">
                      Nome
                    </label>

                    <input
                      type="text"
                      id="nome"
                      className="form-control"
                      placeholder="Digite seu nome"
                      value={nome}
                      onChange={(evento) => setNome(evento.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>

                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Digite seu e-mail"
                      value={email}
                      onChange={(evento) => setEmail(evento.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100"
                  >
                    Participar
                  </button>

                </form>

                {mensagem && (
                  <div
                    className={`alert ${
                      sucesso ? 'alert-success' : 'alert-danger'
                    } mt-3 text-center`}
                  >
                    {mensagem}
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Participar