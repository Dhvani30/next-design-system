"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { lazy, Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const NOCTURNAL = "#ffc801";

const PARTICLE_COUNT = 75;

function ParticleSystem() {
  const { mouse } = useThree();
  const particlesRef = useRef<THREE.Points>(null);
  const originalPositions = useRef<Float32Array>();

  const [positions] = useState(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 8;
      pos[i + 1] = (Math.random() - 0.5) * 8;
      pos[i + 2] = (Math.random() - 0.5) * 4;
    }
    originalPositions.current = new Float32Array(pos);
    return pos;
  });

  useFrame((state) => {
    if (!particlesRef.current || !originalPositions.current) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const originalX = originalPositions.current[i3];
      const originalY = originalPositions.current[i3 + 1];
      const originalZ = originalPositions.current[i3 + 2];

      // Floating animation
      positions[i3] = originalX + Math.sin(time * 0.5 + i) * 0.3;
      positions[i3 + 1] = originalY + Math.cos(time * 0.4 + i * 0.5) * 0.3;
      positions[i3 + 2] = originalZ + Math.sin(time * 0.3 + i * 0.3) * 0.2;

      // Mouse interaction - particles move away from cursor
      const mouseX = mouse.x * 4;
      const mouseY = mouse.y * 4;
      const dx = positions[i3] - mouseX;
      const dy = positions[i3 + 1] - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 2) {
        const force = (2 - dist) * 0.3;
        positions[i3] += (dx / dist) * force;
        positions[i3 + 1] += (dy / dist) * force;
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;

    // Slow rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={NOCTURNAL}
        size={0.08}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

const Hero3DBackgroundCanvas = lazy(async () => ({
  default: function Hero3DBackgroundCanvasComponent() {
    return (
      <Canvas
        className="hero-3d-canvas"
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        frameloop="always"
      >
        <ParticleSystem />
      </Canvas>
    );
  },
}));

export function Hero3DBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-40"
    >
      <Suspense fallback={null}>
        <Hero3DBackgroundCanvas />
      </Suspense>
    </div>
  );
}
