import './App.css'

import { Suspense } from "react";
import { Perf } from 'r3f-perf'
import { Canvas } from "@react-three/fiber";

import { Earth } from "@/components/Earth";
import { TopSection } from "@/components/TopSection";

function App() {
  return (
    <div className='w-screen h-screen'>
      <TopSection />

      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        
        <Perf 
          logsPerSecond={1}
          position='bottom-left'
          style={{ bottom: '.5rem', left: '.5rem' }}
        />
      </Canvas>
    </div>
  )
}

export default App
