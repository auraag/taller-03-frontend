import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Enrollment from './components/Enrollment'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Courses />
        <Enrollment />
      </main>
      <Footer />
    </div>
  )
}

export default App