import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Cursos from './views/Cursos'
import Nosotros from './views/Nosotros'
import Login from './views/Login'
import NotFound from './views/NotFound'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App