import React, { useRef, useEffect } from 'react';
import { EffectComposer, DepthOfField, Bloom, Vignette, Noise } from '@react-three/postprocessing';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import './Canvas.scss';
import * as THREE from 'three';

extend({ EffectComposer, DepthOfField });

function getRadius() {
  return Math.min(Math.max(window.innerWidth / 10, 70), 110);
}

function Sphere() {
  const sphereRef = useRef();
  const { size } = useThree();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0005;
    }
  });

  useEffect(() => {
    if (sphereRef.current) {
      const sphereGeometry = sphereRef.current.geometry;
      const newGeometry = new THREE.SphereGeometry(getRadius(), 30, 30, 0, 6.28, 0, Math.PI);
      sphereGeometry.copy(newGeometry);
    }
  }, [size.width, size.height]);

  //parametreja
  const elems = 30;

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[getRadius(), elems, elems, 0, Math.PI * 2, 0, Math.PI]} />
      <meshBasicMaterial color={0xe7ff50} wireframe={true} />
    </mesh>
  );
}

export default function BgCanvas() {
  return (
    <Canvas
      className='bgCanvas'
      camera={{ position: [0, 0, 200], rotation: [0, 0, 0.4] }}
      antialias={'true'}
    >
      <ambientLight />

      <Sphere />

      <EffectComposer>
        <DepthOfField focusDistance={1} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.05} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
      </EffectComposer>
    </Canvas>
  );
}
