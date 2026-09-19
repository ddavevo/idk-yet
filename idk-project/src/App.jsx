import { useState } from 'react'
import LatticeLoader from './components/LatticeLoader';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <LatticeLoader
          status="working"
          label="idk wtv..."
          doneLabel="Done in"
          errorLabel="Failed after"
          pattern="rain"
          grid={4}
          shape="square"
          doneColor="#22c55e"
          errorColor="#ef4444"
          cellSize={4}
          gap={2}
          fontSize={14}
          step={100}
          idleOpacity={0.15}
          glow={true}
          glowColor=""
          showTimer={false}
          color="#e333a9"
        />
      </section>
    </>
  )
}

export default App
