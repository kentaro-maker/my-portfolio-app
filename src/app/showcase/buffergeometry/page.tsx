"use client";

import Navbar from "@/components/Navbar"
import { ContactShadows, Environment, OrbitControls, PresentationControls, Segment, SegmentObject, Segments, shaderMaterial, StatsGl, Stats } from "@react-three/drei"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import React, { useEffect, useRef } from "react"
import { Leva, useControls } from 'leva'
import * as THREE from "three";
import { MaterialNode } from "@react-three/fiber";

const Page = () => {

  const ref = useRef<HTMLDivElement>(null)
  const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x050505 );
	scene.fog = new THREE.Fog( 0x050505, 2000, 3500 );

  const camera = new THREE.PerspectiveCamera()


  useEffect(()=>{
    camera.fov = 27
    camera.aspect = window.innerWidth / window.innerHeight
    camera.near =  1
    camera.far = 3500
    camera.position.z = 2750;
  },[])
  

  return (
    <>
      <Navbar title="BufferGeometry" />
      <div ref={ref} className="h-screen relative">
        <Canvas camera={camera} scene={scene}>
          <StatsGl parent={ref} className="!absolute" />

          <ambientLight color={0xcccccc} />
          <Geometry />
          <OrbitControls />
          <Environment preset="city" />
        </Canvas>
      </div>
    </>
  )
}

const Geometry = () => {
  const { rotation } = useControls({ rotation: false })

  const triangles = 160000;

	const geometry = new THREE.BufferGeometry();

	const positions = [];
	const normals = [];
	const colors = [];

	const color = new THREE.Color();

	const n = 800, n2 = n / 2;	// triangles spread in the cube
	const d = 12, d2 = d / 2;	// individual triangle size

  const pA = new THREE.Vector3();
  const pB = new THREE.Vector3();
  const pC = new THREE.Vector3();

	const cb = new THREE.Vector3();
  const ab = new THREE.Vector3();

  for ( let i = 0; i < triangles; i ++ ) {

    // positions

    const x = Math.random() * n - n2;
    const y = Math.random() * n - n2;
    const z = Math.random() * n - n2;

    const ax = x + Math.random() * d - d2;
    const ay = y + Math.random() * d - d2;
    const az = z + Math.random() * d - d2;

    const bx = x + Math.random() * d - d2;
    const by = y + Math.random() * d - d2;
    const bz = z + Math.random() * d - d2;

    const cx = x + Math.random() * d - d2;
    const cy = y + Math.random() * d - d2;
    const cz = z + Math.random() * d - d2;

    positions.push( ax, ay, az );
    positions.push( bx, by, bz );
    positions.push( cx, cy, cz );

    // flat face normals

    pA.set( ax, ay, az );
    pB.set( bx, by, bz );
    pC.set( cx, cy, cz );

    cb.subVectors( pC, pB );
    ab.subVectors( pA, pB );
    cb.cross( ab );

    cb.normalize();

    const nx = cb.x;
    const ny = cb.y;
    const nz = cb.z;

    normals.push( nx, ny, nz );
    normals.push( nx, ny, nz );
    normals.push( nx, ny, nz );

    // colors

    const vx = ( x / n ) + 0.5;
    const vy = ( y / n ) + 0.5;
    const vz = ( z / n ) + 0.5;

    color.setRGB( vx, vy, vz );

    const alpha = Math.random();

    colors.push( color.r, color.g, color.b, alpha );
    colors.push( color.r, color.g, color.b, alpha );
    colors.push( color.r, color.g, color.b, alpha );

  }

  function disposeArray() {

    this.array = null;

  }


  geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ).onUpload( disposeArray ) );
	geometry.setAttribute( 'normal', new THREE.Float32BufferAttribute( normals, 3 ).onUpload( disposeArray ) );
	geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 4 ).onUpload( disposeArray ) );

	geometry.computeBoundingSphere();

  const material = new THREE.MeshPhongMaterial( {
    color: 0xd5d5d5, specular: 0xffffff, shininess: 250,
    side: THREE.DoubleSide, vertexColors: true, transparent: true
  } );

  const ref = useRef<THREE.Mesh>(null)

  // useFrame((state, delta) => {
  //     ref.current.rotation.x += (delta * 0.2)
  //     ref.current.rotation.y += (delta * 0.5)
  // })


  return (
    <mesh ref={ref} geometry={geometry} material={material} />
  )
}

export default Page