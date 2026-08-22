import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'

function Placeholder({ title }) {
  return (
    <div className="container" style={{ padding: '120px 20px', textAlign: 'center' }}>
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle" style={{ marginBottom: 24 }}>
        This page will be built next. The homepage matches the original HTML/CSS.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Placeholder title="Coming Soon" />} />
      </Routes>
    </BrowserRouter>
  )
}
