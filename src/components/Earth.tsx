import React, { useRef } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { /* OrbitControls, */ Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader, Mesh } from "three";

import EarthDayMap from "@/assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "@/assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "@/assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "@/assets/textures/8k_earth_clouds.jpg";

import { AtmosphereMaterial } from '@/materials/AtmosphereMaterial'

extend({ AtmosphereMaterial });

export const Earth: React.FC = () => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef<Mesh>(null!);
  const cloudsRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 60;
    } 

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 50;
    }
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2.5, 0, 5]} intensity={10} />
      
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      
      <mesh ref={cloudsRef} position={[0, 0, 3.15]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh ref={earthRef} position={[0, 0, 3.15]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
      
      <mesh position={[0, 0, 3.15]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <atmosphereMaterial 
          attach="material"
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}
