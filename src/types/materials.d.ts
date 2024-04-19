import { ReactThreeFiber } from '@react-three/fiber'

import { AtmosphereMaterial } from '@/materials/AtmosphereMaterial'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      atmosphereMaterial: ReactThreeFiber.Object3DNode<AtmosphereMaterial, typeof AtmosphereMaterial>
    }
  }
}