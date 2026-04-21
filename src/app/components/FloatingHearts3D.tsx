import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function Heart({ position, rotation, scale, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.position.y += delta * 0.5;
      if (meshRef.current.position.y > 10) {
        meshRef.current.position.y = -10;
      }
    }
  });

  const geometry = useMemo(() => {
    const x = 0, y = 0;
    const heartShape = new THREE.Shape();
    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

    const extrudeSettings = { depth: 2, bevelEnabled: true, bevelSegments: 1, steps: 1, bevelSize: 0.5, bevelThickness: 0.5 };
    const geom = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    geom.center();
    geom.scale(0.04, 0.04, 0.04);
    geom.rotateX(Math.PI);
    return geom;
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} geometry={geometry}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

export function FloatingHearts3D({ count = 15, colors = ['#f87171', '#fbcfe8', '#fecdd3', '#e879f9'] }: { count?: number, colors?: string[] }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 20, 
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: Math.random() * 1.5 + 0.5,
      color: colors[i % colors.length]
    }));
  }, [count, colors]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#f43f5e" />
        {hearts.map((props, i) => (
          <Heart key={i} {...props} />
        ))}
      </Canvas>
    </div>
  );
}
