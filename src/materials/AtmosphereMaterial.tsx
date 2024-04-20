import * as THREE from "three";

import { shaderMaterial } from '@react-three/drei'

import EarthDayMap from "@/assets/textures/8081_earthmap10k.jpg";

import atmosphereVertexShader from "@/assets/shaders/atmosphereVertex.glsl";
import atmosphereFragmentShader from "@/assets/shaders/atmosphereFragment.glsl";

export const AtmosphereMaterial = shaderMaterial(
  { globeTexture: new THREE.TextureLoader().load(EarthDayMap) },
  atmosphereVertexShader,
  atmosphereFragmentShader
);
