import './App.css'

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

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
      </Canvas>
    </div>
  )
}

export default App
