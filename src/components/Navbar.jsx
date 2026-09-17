function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">

          <a className="navbar-brand fw-bold" href="#inicio">
            Alimenta+
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="menuPrincipal"
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#inicio">
                  Início
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#ods2">
                  ODS 2
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#funcionalidades">
                  Dicas
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#dados">
                  Dados Agrícolas
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar