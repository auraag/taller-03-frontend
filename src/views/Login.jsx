import { useState } from 'react'
import Footer from '../components/Footer'
import './Login.css'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(evento) {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <>
      <main className="login-section">
        <form onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>

          <label htmlFor="correo">Correo</label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
            disabled={enviado}
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(evento) => setContrasena(evento.target.value)}
            disabled={enviado}
          />

          <button
            type="submit"
            disabled={!correo || !contrasena || enviado}
          >
            Ingresar
          </button>

          <p>
            Este formulario es solo de demostración y no valida usuarios reales.
          </p>
        </form>
      </main>

      <Footer />
    </>
  )
}

export default Login