import { Link } from 'react-router'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>Aprende <span>React</span> desde cero</h1>

        <p className="hero-copy">
          Domina la librería más popular del frontend con proyectos prácticos y reales.
        </p>

        <Link className="primary-button" to="/cursos">
          Ver cursos <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}

export default Hero