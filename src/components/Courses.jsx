import CourseCard from './CourseCard'

const courses = [
  { icon: '✣', title: 'React Básico', description: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.', level: 'Principiante', accent: '#7257d9' },
  { icon: '▰', title: 'React Hooks', description: 'Profundiza en useState, useEffect y crea tus propios custom hooks.', level: 'Intermedio', accent: '#3d91e8' },
  { icon: '▰', title: 'Estado Global', description: 'Gestiona el estado con Context API y aprende cuándo usarlo.', level: 'Intermedio', accent: '#ecad39' },
  { icon: '🚀', title: 'React Avanzado', description: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.', level: 'Avanzado', accent: '#ef4968' },
]

function Courses() {
  return (
    <section className="courses-section" id="cursos">
      <div className="section-heading">
        <h2>Nuestros Cursos</h2>
        <p>Elige el camino que mejor se adapte a ti</p>
      </div>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  )
}

export default Courses