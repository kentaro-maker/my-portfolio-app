"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useKey } from 'react-use';
import { Canvas, ReactThreeFiber, useFrame } from '@react-three/fiber'
import { RenderTexture, OrbitControls, PerspectiveCamera,Html, Text, ContactShadows } from '@react-three/drei'

function Cube() {
  const text = ""
  return (
    <mesh>
      <boxGeometry args={[2.1, 2.97, 0.1]} />
      <meshStandardMaterial>
        <RenderTexture attach="map"anisotropy={16} sourceFile={undefined}>
          <PerspectiveCamera makeDefault manual aspect={2.1 / 2.97} position={[0, 0, 5]} />
          <color attach="background" args={['white']} />
          <Input />
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  )
}

function Input(props) {
  const [text, set] = useState('hello world ...')
  const regex = new RegExp(/\w/)
  useKey((e) => regex.test(e.key), (e)=> set(text + "-" + e.key), { event: 'keydown' })
  return (
    <group {...props}>
      <Text position={[-2,-0.5,0]} anchorX={0}  fontSize={0.1} letterSpacing={-0.0}>
        {text}
        <meshStandardMaterial color="black" />
      </Text>
    
    </group>
  )
}

const Page = () => {
 
  return (
    <>
      <h1>Memo Proto</h1>
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Input />
        <Cube />
        <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
        <Memo scale={0.2} position={[0,0,2]}/>
      </Canvas>
    </>
  )
}

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
  };
  materials: {
    LB: THREE.MeshStandardMaterial;
    Cube: THREE.MeshStandardMaterial;
  };
};

export function Memo(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/ColorBlock.gltf") as GLTFResult;
  
  return (
    <group {...props} dispose={null}>
       <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry}>
        <meshStandardMaterial>
          {/* <RenderTexture attach="map"anisotropy={16} sourceFile={undefined}>
            <PerspectiveCamera makeDefault manual aspect={6/8} position={[0, 0, 5]} />
            <color attach="background" args={['white']} />
            <Input />
          </RenderTexture> */}
        <Html
          center={true}
          fullscreen={true}
        >
          <h1>hello</h1>
          <p>world</p>
        </Html>
        </meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.Cube}
      />
    </group>
  );
}

useGLTF.preload("/ColorBlock.gltf");

export default Page
