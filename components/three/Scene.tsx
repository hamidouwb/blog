'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Model } from './Model';
import {
  Color,
  Mesh,
  PlaneGeometry,
  Raycaster,
  Vector2,
  Vector3,
  PMREMGenerator,
} from 'three';
import * as THREE from 'three';

function GalacticLights({ characterRef }: { characterRef: React.RefObject<THREE.Group | null> }) {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  const light3Ref = useRef<THREE.PointLight>(null);
  const spotRef = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const charY = characterRef.current?.position.y || 0;

    // Orbiting galactic beam
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(time * 0.5) * 6;
      light1Ref.current.position.z = Math.cos(time * 0.5) * 6;
      light1Ref.current.position.y = charY + 3 + Math.sin(time * 0.8) * 1;
      light1Ref.current.intensity = 8 + Math.sin(time * 2) * 2;
    }

    // Counter-orbiting nebula glow
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.sin(time * 0.3 + Math.PI) * 5;
      light2Ref.current.position.z = Math.cos(time * 0.3 + Math.PI) * 5;
      light2Ref.current.position.y = charY - 1 + Math.cos(time * 0.6) * 1.5;
      light2Ref.current.intensity = 6 + Math.sin(time * 1.5) * 1.5;
    }

    // Pulsing rim light
    if (light3Ref.current) {
      light3Ref.current.position.y = charY + Math.sin(time * 0.4) * 2;
      light3Ref.current.intensity = 5 + Math.sin(time * 3) * 2;
    }

    // Spotlight follows character
    if (spotRef.current && characterRef.current) {
      spotRef.current.target.position.set(0, charY, 0);
      spotRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      {/* Main galactic beam - orbiting cyan/blue */}
      <pointLight
        ref={light1Ref}
        color="#00d4ff"
        intensity={8}
        distance={30}
        decay={1.5}
      />

      {/* Nebula glow - orbiting pink/magenta */}
      <pointLight
        ref={light2Ref}
        color="#ff00aa"
        intensity={6}
        distance={25}
        decay={1.5}
      />

      {/* Rim light - pulsing purple */}
      <pointLight
        ref={light3Ref}
        position={[-4, 0, -5]}
        color="#8844ff"
        intensity={5}
        distance={25}
        decay={1.5}
      />

      {/* Spotlight beam from above */}
      <spotLight
        ref={spotRef}
        position={[0, 15, 5]}
        color="#ffffff"
        intensity={3}
        angle={0.3}
        penumbra={0.8}
        distance={40}
        decay={1.5}
      />
      <primitive object={new THREE.Object3D()} ref={(obj: THREE.Object3D) => {
        if (spotRef.current && obj) spotRef.current.target = obj;
      }} />
    </>
  );
}

function Skybox() {
  const gltf = useGLTF('/models/free_-_skybox_space_nebula.glb');
  const skyboxRef = useRef<THREE.Group>(null);

  useEffect(() => {
    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        // Convert to unlit material so lighting doesn't affect it
        const texture = child.material.map || child.material.emissiveMap;
        child.material = new THREE.MeshBasicMaterial({
          map: texture,
          side: child.material.side,
        });
      }
    });
  }, [gltf]);

  useFrame((_, delta) => {
    if (skyboxRef.current) {
      // Slow rotation for a drifting space feel
      skyboxRef.current.rotation.y += delta * 0.02;
      skyboxRef.current.rotation.x += delta * 0.005;
    }
  });

  return <primitive ref={skyboxRef} object={gltf.scene} />;
}

useGLTF.preload('/models/free_-_skybox_space_nebula.glb');

export function Scene() {
  const { scene, camera, gl: renderer } = useThree();
  const characterRef = useRef<THREE.Group>(null);
  const [intersectionPoint, setIntersectionPoint] = useState<Vector3 | null>(null);
  const translY = useRef(-1);
  const translAccel = useRef(0);
  const angleZ = useRef(0);
  const angleAccel = useRef(0);
  const pmremRef = useRef<PMREMGenerator>(new PMREMGenerator(renderer));
  const envMapRTRef = useRef<THREE.WebGLRenderTarget | null>(null);

  // Setup mouse tracking
  useEffect(() => {
    const planeGeo = new PlaneGeometry(20, 20);
    const mesh = new Mesh(planeGeo);
    const raycaster = new Raycaster();
    const pointer = new Vector2();

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObject(mesh);
      const point = intersects[0]?.point;

      if (point) {
        // this prevents the spring motion to be different while the pointer
        // spans the x axis
        point.x = 3;
        setIntersectionPoint(point);
      }
    };

    window.addEventListener('pointermove', onPointerMove);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [camera]);

  // Main render loop
  useFrame(() => {
    if (!characterRef.current || !intersectionPoint) return;

    // Spring physics for Y position
    const targetY = intersectionPoint.y || 0;
    translAccel.current += (targetY - translY.current) * 0.002; // stiffness
    translAccel.current *= 0.95; // damping
    translY.current += translAccel.current;

    // Calculate rotation based on direction
    const dir = intersectionPoint
      .clone()
      .sub(new Vector3(0, translY.current, 0))
      .normalize();
    const dirCos = dir.dot(new Vector3(0, 1, 0));
    const angle = Math.acos(dirCos) - Math.PI * 0.5;
    angleAccel.current += (angle - angleZ.current) * 0.01; // stiffness
    angleAccel.current *= 0.85; // damping
    angleZ.current += angleAccel.current;

    // Update character position and rotation
    characterRef.current.position.y = translY.current;
    characterRef.current.rotation.set(angleZ.current, 0, angleZ.current);

    // Dispose old environment map
    if (envMapRTRef.current) envMapRTRef.current.dispose();

    // Generate new environment map
    characterRef.current.visible = false;
    const originalBg = scene.background;
    scene.background = null;
    envMapRTRef.current = pmremRef.current.fromScene(scene, 0, 0.1, 1000);
    scene.background = null;
    characterRef.current.visible = true;

    // Apply environment map to character materials
    characterRef.current.traverse((child: any) => {
      if (child?.material?.envMapIntensity !== undefined) {
        child.material.envMap = envMapRTRef.current?.texture || null;
        child.material.envMapIntensity = 1;
        if (child.material.normalScale) {
          child.material.normalScale.set(0.3, 0.3);
        }
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[-5, 6, 10]} fov={25} far={10000} />
      <OrbitControls enableDamping target={[0, 0, 0]} />

      <GalacticLights characterRef={characterRef} />

      <Skybox />
      <Model ref={characterRef} />

      <EffectComposer>
        <Bloom
          intensity={0.5}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.3}
          radius={1}
        />
      </EffectComposer>
    </>
  );
}
