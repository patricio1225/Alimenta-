function Inicio() {
    return (
        <section id="inicio" className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold text-success">
                            Alimenta+
                        </h1>

                        <h2 className="h4 mb-3">
                            Alimentação consciente para um futuro sustentável
                        </h2>

                        <p className="lead">
                            Uma plataforma criada para incentivar escolhas alimentares
                            mais conscientes, combater o desperdício de alimentos e
                            contribuir com os objetivos da ODS 2.
                        </p>

                        <a href="#ods2" className="btn btn-success">
                            Conheça o projeto
                        </a>
                    </div>

                    <div className="col-lg-6 text-center">
                        <img
                            src="/img/globo.jpg"
                            alt="Alimentos representando sustentabilidade"
                            className="img-fluid rounded shadow"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Inicio