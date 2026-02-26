import { Routes, Route } from 'react-router-dom'
import { Header } from "./features/layout/components/Header"
import { Content } from "./features/layout/components/Content"
import { Footer } from "./features/layout/components/Footer"
import { Props } from './features/layout/components/Props'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/props" element={<Props />} />
        <Route path="/articulos" element={<Content />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App