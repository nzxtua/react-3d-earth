import React, { useRef } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { /* OrbitControls, */ Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

// import EarthDayMap from "@/assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "@/assets/textures/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "@/assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "@/assets/textures/8k_earth_clouds.jpg";

import EarthDayMap from "@/assets/textures/8081_earthmap10k.jpg";
// import EarthNormalMap from "@/assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "@/assets/textures/8081_earthspec10k.jpg";
// import EarthCloudsMap from "@/assets/textures/8k_earth_clouds.jpg";
import EarthLightsMap from "@/assets/textures/8081_earthlights10k.jpg";
import EarthBumpMap from "@/assets/textures/8081_earthbump10k.jpg";

import { AtmosphereMaterial } from '@/materials/AtmosphereMaterial'

extend({ AtmosphereMaterial });

export const Earth: React.FC = () => {
  const [colorMap, normalMap, specularMap, cloudsMap, lightsMap, bumpMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, EarthLightsMap, EarthBumpMap],
  );

  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsedTime / 60;
      groupRef.current.rotation.z = -23.4 * Math.PI / 180;
    } 
  });

  return (
    <>
      <spotLight 
        decay={0}
        angle={0.15}
        penumbra={1}
        position={[-10, 1, 12]} 
        intensity={Math.PI}
        color='#f6f3ea'
      />
      
      <Stars
        fade
        count={20000}
        depth={60}
        radius={300}
        factor={7}
        saturation={0}
      />
      <group ref={groupRef} scale={2.7}>

        <mesh>
          <sphereGeometry args={[1.005, 32, 32]} />
          <atmosphereMaterial 
            attach="material"
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[1.01, 32, 32]} />
          <meshPhongMaterial
            transparent
            opacity={0.4}
            map={cloudsMap}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial
            map={lightsMap}
            specularMap={specularMap}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={colorMap}
            normalMap={normalMap}
            bumpMap={bumpMap}
            bumpScale={2.5}
            metalness={0.4}
            roughness={0.7}
          />

          {/* <OrbitControls
            enableZoom
            enablePan
            enableRotate
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          /> */}
        </mesh>
      </group>
    </>
  );
}
