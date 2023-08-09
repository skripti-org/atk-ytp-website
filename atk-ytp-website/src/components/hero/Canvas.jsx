import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './Canvas.scss';

function Sphere() {
  const radius = Math.min(window.innerWidth, 100);

  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[radius, 30, 30, 0, 6.28, 0, Math.PI]} />
      <meshBasicMaterial color={0xe7ff50} wireframe={true} />
    </mesh>
  );
}

export default function BgCanvas() {
  return (
    <Canvas className='bgCanvas' camera={{ position: [0, 0, 200], rotation: [0, 0, 0.4] }}>
      <ambientLight />
      <Sphere />
    </Canvas>
  );
}
