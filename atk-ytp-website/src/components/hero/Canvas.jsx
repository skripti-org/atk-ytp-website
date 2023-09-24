import React, { useRef, useEffect, useState } from 'react';
import { EffectComposer, DepthOfField, Vignette } from '@react-three/postprocessing';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import './Canvas.scss';
import * as THREE from 'three';

extend({ EffectComposer, DepthOfField });

function getRadius() {
  return Math.min(Math.max(window.innerWidth / 10, 70), 110);
}

function Sphere({ onSphereLoaded }) {
  const sphereRef = useRef();
  const { size } = useThree();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.0002;
    }
  });

  useEffect(() => {
    if (sphereRef.current) {
      const sphereGeometry = sphereRef.current.geometry;
      const newGeometry = new THREE.SphereGeometry(getRadius(), 30, 20, 0, 6.28, 0, Math.PI);
      sphereGeometry.copy(newGeometry);
      onSphereLoaded();
    }
  }, [size.width, size.height]);

  //parametreja
  const elems = 20;

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[getRadius(), elems, elems, 0, Math.PI * 2, 0, Math.PI]} />
      <meshBasicMaterial color={0xe7ff50} wireframe={true} />
    </mesh>
  );
}

export default function BgCanvas() {
  const [canvasOpacity, setCanvasOpacity] = useState(0);

  const handleSphereLoaded = () => {
    setTimeout(() => {
      setCanvasOpacity(1);
    }, 1000);
  };

  return (
    <Canvas
      style={{ opacity: canvasOpacity }}
      className='bgCanvas'
      camera={{ position: [0, 0, 200], rotation: [0, 0, 0.4] }}
      antialias={'false'}
    >
      <Sphere onSphereLoaded={handleSphereLoaded} />

      <EffectComposer>
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>
    </Canvas>
  );
}
