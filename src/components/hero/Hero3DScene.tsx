"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";

const NOCTURNAL = "#ffc801";

const NODE_POSITIONS: [number, number, number][] = [
  [1.4, 0.35, 0.2],
  [-1.1, -0.45, 0.6],
  [0.3, 0.9, -1.2],
  [-0.6, -0.75, -1.0],
  [0.85, -0.55, 1.3],
];

function FloatingDataCluster() {
  const groupRef = useRef<Group>(null);
  const nodes = useMemo(() => NODE_POSITIONS, []);

  useFrame((_, delta) => {
    if (!groupRef.current) {
      return;
    }
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x = Math.sin(performance.now() * 0.00025) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshBasicMaterial
          color={NOCTURNAL}
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>

      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.07, 8, 8]} />
          <meshBasicMaterial color={NOCTURNAL} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

export function Hero3DSceneContent() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <FloatingDataCluster />
    </>
  );
}
