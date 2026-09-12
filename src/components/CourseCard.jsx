function CourseCard({ icon, title, description, level, accent }) {
  return (
    <article className="course-card" style={{ '--card-accent': accent }}>
      <div className="course-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="level-tag">{level}</span>
    </article>
  )
}

export default CourseCard