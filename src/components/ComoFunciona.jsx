function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="text-success fw-bold">
            Como o Alimenta+ Funciona
          </h2>

          <p>
            A plataforma busca aproximar informação, conscientização
            e atitudes sustentáveis no dia a dia.
          </p>
        </div>

        <div className="row align-items-center">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/img/prato.png"
              alt="Alimentação consciente"
              className="img-fluid rounded"
              style={{maxWidth:'330px'}}
            />
          </div>

          <div className="col-lg-6">

            <div className="mb-4">
              <h3 className="h5 text-success">
                Informação
              </h3>

              <p>
                Disponibilizamos informações que ajudam a compreender
                a importância de uma alimentação adequada e sustentável.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="h5 text-success">
                Consumo Consciente
              </h3>

              <p>
                Incentivamos atitudes simples para reduzir o desperdício
                e aproveitar melhor os alimentos.
              </p>
            </div>

            <div>
              <h3 className="h5 text-success">
                Sustentabilidade
              </h3>

              <p>
                Relacionamos as escolhas alimentares com a agricultura
                sustentável e com os objetivos propostos pelo ODS 2.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ComoFunciona