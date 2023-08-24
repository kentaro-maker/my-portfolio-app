"use client";
import React, { useRef, Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Html, OrbitControls, AccumulativeShadows, Decal, RandomizedLight, useTexture, Stage } from '@react-three/drei'
import * as THREE from 'three'


const Page = () => {
  const cf = "https://pierfrancesco-soffritti.medium.com/animations-with-alpha-textures-in-three-js-52a33654e137"
  return (
    <>
       <p>AlphaMap Experiment</p>
       <p>{cf}</p>
       <Canvas shadows dpr={[1, 2]} camera={{ position: [-5, 5.5, 5], fov: 40 }}>
          <Stage preset="rembrandt" intensity={1}  environment="city">
            <Suspense fallback={null}>
             <Model />
            </Suspense>
          </Stage>
          <OrbitControls  makeDefault  minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </>
  )
}


function Model() {
  const texture = useTexture('/alpha.png')
  texture.magFilter = THREE.NearestFilter
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.y = 1

  const matRef = useRef<THREE.MeshStandardMaterial>(null)

  useFrame(({ clock }) => {
    matRef.current.alphaMap.offset.y = clock.getElapsedTime()*0.15
  })
  
  // var alphaMap = new THREE.TextureLoader().load('alpha.png');
  // material.alphaMap = alphaMap;
  // material.alphaMap.magFilter = THREE.NearestFilter;
  // material.alphaMap.wrapT = THREE.RepeatWrapping;
  // material.alphaMap.repeat.y = 1;
  // var mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh);
  // // execute this code every frame
  // mesh.material.alphaMap.offset.y = time*0.0015;
  return (
    <mesh rotation={[0,0,-Math.PI/4]} >
      <icosahedronGeometry args={[30, 5]} />
      <meshStandardMaterial ref={matRef} alphaMap={texture} color={0x040404} transparent={true} side={THREE.DoubleSide} alphaTest={0.5}  />
   </mesh>
  );
}


export default Page
