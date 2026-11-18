import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import './styles/App.css'

function App() {

  return (
    <>
      <Routes id="center">
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
