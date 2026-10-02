import { NavLink } from 'react-router'
import './Navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        React<span>Academy</span>
      </NavLink>

      <nav className="main-nav" aria-label="Navegación principal">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/cursos"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Cursos
        </NavLink>

        <NavLink
          to="/nosotros"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Nosotros
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Login
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar