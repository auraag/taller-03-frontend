import { Link } from 'react-router'
import Footer from '../components/Footer'
import './NotFound.css'

function NotFound() {
  return (
    <>
      <main className="not-found">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <Link to="/">Volver al inicio</Link>
      </main>

      <Footer />
    </>
  )
}

export default NotFound