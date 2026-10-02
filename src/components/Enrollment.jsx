import { useState } from 'react'
import './Enrollment.css'

function Enrollment() {
  const [students, setStudents] = useState(0)

  const decrease = () => setStudents((current) => Math.max(0, current - 1))
  const increase = () => setStudents((current) => current + 1)

  return (
    <section className="enrollment-section">
      <div className="section-heading section-heading-dark">
        <h2>¿Cuántos estudiantes van a inscribirse?</h2>
        <p>Usa los botones para ajustar el número</p>
      </div>

      <div className="counter-wrap">
        <div
          className="counter"
          aria-label={`${students} estudiantes inscritos`}
        >
          <button
            type="button"
            onClick={decrease}
            aria-label="Disminuir estudiantes"
          >
            −
          </button>

          <strong>{students}</strong>

          <button
            type="button"
            onClick={increase}
            aria-label="Aumentar estudiantes"
          >
            +
          </button>
        </div>

        <span className="counter-label">estudiantes inscritos</span>
      </div>
    </section>
  )
}

export default Enrollment