'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const STARS_COUNT = 50;

interface ShootingStar {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  trailLength: number;
}

function random(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function createStar(): ShootingStar {
  // Camera is at [-5, 6, 10] looking at [0, 0, 0] with narrow FOV (25 degrees)
  // Keep stars close to the center of view
  return {
    x: random(-8, 8),
    y: random(8, 15),
    z: random(-15, 0),
    vx: random(1, 4),
    vy: random(-6, -3),
    vz: random(-0.5, 0.5),
    life: 0,
    maxLife: random(3, 6),
    trailLength: random(4, 10),
  };
}

export function Stars() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Load texture with Suspense handling
  const trailTexture = useLoader(TextureLoader, '/textures/energy-beam-opacity.png');

  const stars = useMemo(() => {
    return Array.from({ length: STARS_COUNT }, () => createStar());
  }, []);

  useEffect(() => {
    console.log(`Stars component mounted with ${STARS_COUNT} stars`);
    console.log('Trail texture loaded:', trailTexture);
  }, [trailTexture]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    stars.forEach((star, i) => {
      // Update position
      star.x += star.vx * delta;
      star.y += star.vy * delta;
      star.z += star.vz * delta;
      star.life += delta;

      // Reset if out of bounds or life expired
      if (star.life > star.maxLife || star.y < -10) {
        const newStar = createStar();
        Object.assign(star, newStar);
      }

      // Calculate opacity (fade in/out)
      let opacity = 1;
      if (star.life < 0.3) {
        opacity = star.life / 0.3;
      } else if (star.life > star.maxLife - 0.8) {
        opacity = (star.maxLife - star.life) / 0.8;
      }

      // Position and rotate to face movement direction
      dummy.position.set(star.x, star.y, star.z);

      // Calculate angle based on velocity
      const angle = Math.atan2(star.vy, star.vx);
      dummy.rotation.set(0, 0, angle);

      dummy.scale.set(star.trailLength, 0.4, 1);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);

      // Very bright white/yellow color for shooting stars
      const color = new THREE.Color();
      const brightness = opacity * 15; // Extra bright for bloom
      color.setRGB(brightness, brightness * 0.95, brightness * 0.7);
      meshRef.current!.setColorAt(i, color);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, STARS_COUNT]}>
      <planeGeometry args={[1, 0.15]} />
      <meshBasicMaterial
        map={trailTexture}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        depthTest={true}
        vertexColors
        toneMapped={false}
        opacity={0.9}
      />
    </instancedMesh>
  );
}
