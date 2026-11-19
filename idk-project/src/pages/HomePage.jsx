import { Header } from '../components/Header'
import LatticeLoader from '../components/LatticeLoader'
import OrbitImages from '../components/OrbitImages'
import BranchedMenu from '../components/BranchedMenu'
import './HomePage.css'
import { Download04Icon, Rocket01Icon, Settings02Icon } from '@hugeicons/core-free-icons';

export function HomePage() {
  const images = [
    "https://picsum.photos/300/300?grayscale&random=1",
    "https://picsum.photos/300/300?grayscale&random=2",
    "https://picsum.photos/300/300?grayscale&random=3",
    "https://picsum.photos/300/300?grayscale&random=4",
    "https://picsum.photos/300/300?grayscale&random=5",
    "https://picsum.photos/300/300?grayscale&random=6",
  ];

  return (
    <>
      <Header>
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
      </Header>

      <div className="homepage-container">
        <div className="branchedmenu-container">
          <BranchedMenu className="branchedmenu"
            items={[
              {
                label: 'Getting started',
                children: [
                  { value: 'install', label: 'Installation', icon: Download04Icon },
                  { value: 'quick', label: 'Quick start', icon: Rocket01Icon },
                  { value: 'config', label: 'Configuration', icon: Settings02Icon }
                ]
              },
              {
                label: 'Components',
                children: [
                  { value: 'buttons', label: 'Buttons' },
                  { value: 'overlays', label: 'Overlays' }
                ]
              }
            ]}
            defaultOpen={[0]}
            defaultActive="quick"
            onSelect={(value, item) => navigate(value)}
            color="#f5f5f5"
            accentColor="#f5f5f5"
            lineColor="#3f3f46"
            width={240}
            rowHeight={36}
            indent={40}
            trunk={14}
            radius={10}
            lineWidth={1.5}
            fontSize={14}
            drawDuration={400}
            foldDuration={300}
          />
        </div>

        <div className="primary-content-container">
          
        </div>
      </div>

    </>
  )
}