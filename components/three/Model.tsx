'use client';

import { useRef, useEffect, forwardRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Group } from 'three';
import * as THREE from 'three';

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number, string?];
  [key: string]: any;
}

export const Model = forwardRef<Group, ModelProps>((props, forwardedRef) => {
  const groupRef = useRef<Group>(null);
  const gltf = useGLTF('/models/Models.glb') as any;

  const { actions } = useAnimations(gltf.animations, groupRef);

  // Play animation on mount
  useEffect(() => {
    const animation = actions['Armature|Take 001|BaseLayer'];
    if (animation) {
      animation.play();
    }
  }, [actions]);


  // Handle forwarded ref
  useEffect(() => {
    if (typeof forwardedRef === 'function') {
      forwardedRef(groupRef.current);
    } else if (forwardedRef) {
      forwardedRef.current = groupRef.current;
    }
  }, [forwardedRef]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
          position={[0, -3, 0]}
        >
          <primitive object={gltf.nodes.mixamorigHips} />
          <skinnedMesh
            name="gold1"
            geometry={gltf.nodes.gold1.geometry}
            material={gltf.materials['musa:gold']}
            skeleton={gltf.nodes.gold1.skeleton}
          />
          <skinnedMesh
            name="Material_Belt"
            geometry={gltf.nodes.Material_Belt.geometry}
            material={gltf.materials['musa:blet']}
            skeleton={gltf.nodes.Material_Belt.skeleton}
          />
          <skinnedMesh
            name="Material_Clothes"
            geometry={gltf.nodes.Material_Clothes.geometry}
            material={gltf.materials['musa:clothes']}
            skeleton={gltf.nodes.Material_Clothes.skeleton}
          />
          <skinnedMesh
            name="Material_Eyes"
            geometry={gltf.nodes.Material_Eyes.geometry}
            material={gltf.materials['musa:eyes']}
            skeleton={gltf.nodes.Material_Eyes.skeleton}
          />
          <skinnedMesh
            name="Material_Gems"
            geometry={gltf.nodes.Material_Gems.geometry}
            material={gltf.materials['musa:gem']}
            skeleton={gltf.nodes.Material_Gems.skeleton}
          />
          <skinnedMesh
            name="Material_Hair"
            geometry={gltf.nodes.Material_Hair.geometry}
            material={gltf.materials['musa:hair']}
            skeleton={gltf.nodes.Material_Hair.skeleton}
          />
          <skinnedMesh
            name="Material_Pants"
            geometry={gltf.nodes.Material_Pants.geometry}
            material={gltf.materials['musa:pants']}
            skeleton={gltf.nodes.Material_Pants.skeleton}
          />
          <skinnedMesh
            name="Material_skin"
            geometry={gltf.nodes.Material_skin.geometry}
            material={gltf.materials['musa:skin']}
            skeleton={gltf.nodes.Material_skin.skeleton}
          />
          <skinnedMesh
            name="u_nobody_smooth_rig02_finished_01modelgeo"
            geometry={gltf.nodes.u_nobody_smooth_rig02_finished_01modelgeo.geometry}
            material={gltf.materials.standardSurface1}
            skeleton={gltf.nodes.u_nobody_smooth_rig02_finished_01modelgeo.skeleton}
          />
        </group>
      </group>
    </group>
  );
});

Model.displayName = 'Model';

// Preload the GLTF model
useGLTF.preload('/models/Models.glb');
