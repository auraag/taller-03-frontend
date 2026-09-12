function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio">React<span>Academy</span></a>
      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#cursos">Cursos</a>
        <a href="#nosotros">Nosotros</a>
      </nav>
    </header>
  )
}

export default Header