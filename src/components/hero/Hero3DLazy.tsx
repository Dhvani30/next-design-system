"use client";

import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { Hero3DSceneContent } from "./Hero3DScene";

const Hero3DSceneCanvas = lazy(async () => ({
  default: function Hero3DSceneCanvasComponent() {
    return (
      <Canvas
        className="hero-3d-canvas"
        camera={{ position: [0, 0, 3.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        frameloop="always"
      >
        <Hero3DSceneContent />
      </Canvas>
    );
  },
}));

export function Hero3DLazy() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-70"
    >
      <Suspense fallback={null}>
        <Hero3DSceneCanvas />
      </Suspense>
    </div>
  );
}
