'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

export function ThreeCanvas() {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden bg-black">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
