import LatticeLoader from '@/components/reactbits-dev/LatticeLoader';
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import './Header.css'

export function Header() {
  return (
    <div className="header-container">
      <LatticeLoader
        status="working"
        label="idk wtv..."
        doneLabel="Done in"
        errorLabel="Failed after"
        pattern="arrow"
        grid={3}
        shape="round"
        doneColor="#22c55e"
        errorColor="#ef4444"
        cellSize={6}
        gap={2}
        fontSize={14}
        step={90}
        idleOpacity={0.15}
        glow
        glowColor="#1d693f"
        showTimer={false}
        color="#1d693f"
      />

      <ButtonGroup>
        <ButtonGroup>
          <Button>Snooze</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>You Lose</Button>
          <Button>Peruse</Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  )
}