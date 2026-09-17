function ODS2() {
  return (
    <section id="ods2" className="py-5">
      <div className="container">

        {/* Apresentação do ODS 2 */}
        <div className="row align-items-center mb-5">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/img/produtor-rural.jpg"
              alt="Produtor rural"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-md-7">
            <h2 className="text-success fw-bold">
              Sobre o ODS 2
            </h2>

            <h3 className="h5 mb-3">
              Fome Zero e Agricultura Sustentável
            </h3>

            <p>
              O ODS 2 busca acabar com a fome, melhorar a alimentação
              e incentivar uma agricultura mais sustentável.
            </p>

            <p>
              O Alimenta+ se relaciona com esse objetivo ao incentivar
              o consumo consciente, o melhor aproveitamento dos alimentos
              e a redução do desperdício.
            </p>
          </div>
        </div>

        {/* Objetivos */}
        <div className="text-center mb-4">
          <h2 className="text-success fw-bold">
            Unidos Contra a Fome
          </h2>

          <p>
            Pequenas ações podem contribuir para uma alimentação mais
            justa, consciente e sustentável.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/img/criança.jpg"
                className="card-img-top"
                alt="Combate à fome"
              />

              <div className="card-body">
                <h3 className="h5 text-success">
                  Erradicar a Fome
                </h3>

                <p className="card-text">
                  Contribuir para que todas as pessoas tenham acesso
                  a uma alimentação adequada, saudável e de qualidade.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/img/tomate.png"
                className="card-img-top"
                alt="Alimentação e agricultura sustentável"
              />

              <div className="card-body">
                <h3 className="h5 text-success">
                  Agricultura Sustentável
                </h3>

                <p className="card-text">
                  Incentivar práticas que valorizem a produção de alimentos
                  de forma responsável e com menor impacto ao meio ambiente.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="/img/pexels-mart-production-7890119.jpg"
                className="card-img-top"
                alt="Apoio aos produtores"
              />

              <div className="card-body">
                <h3 className="h5 text-success">
                  Apoio a Produtores
                </h3>

                <p className="card-text">
                  Valorizar pequenos produtores e fortalecer iniciativas
                  que contribuam para uma produção alimentar sustentável.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ODS2