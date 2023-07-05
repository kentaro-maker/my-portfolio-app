"use client";
import { useRef, useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Grid, OrbitControls, Stage, PivotControls } from '@react-three/drei'
import { useGLTF } from "@react-three/drei";
import {useKeyPressEvent, useKeyPress} from 'react-use';
import { useSpring, animated } from '@react-spring/three'


export default function MyComponent() {
  const ref = useRef()
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1}  environment="city">
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  )
}

export function Model(props) {
  const { nodes, materials } = useGLTF('/kurodenwa.gltf')
  const [hovered, hover] = useState(false);
  const [rotated, rotate] = useState(false);
  
  const [springs, api] = useSpring(() => ({ 
    position: [0, 2.68, -0.62], 
    rotation: [Math.PI / 4, 0, 0],
    config: { mass: 0.1, friction: 50, tension: 170, precision: 0.0001 }
  }),[])


  const handleRotate = (e) => {
    const digit = parseInt(e.key) > 0 ? parseInt(e.key) + 1 : 11
    const rad = Math.PI / 6 * digit
    console.log(e.key + ", " + rad)
    if(e.type == "keydown") rotate(true)
    if(e.type == "keyup") rotate(false)
    api.start({
      rotation: rotated ? [Math.PI / 4, 0, 0]:[Math.PI / 4, -rad, 0]
    })
    console.log("rotate is " + (rotated ? "true" : "false"))

  }
  useKeyPressEvent(1, handleRotate, handleRotate)
  useKeyPressEvent(2, handleRotate, handleRotate)
  useKeyPressEvent(3, handleRotate, handleRotate)
  useKeyPressEvent(4, handleRotate, handleRotate)
  useKeyPressEvent(5, handleRotate, handleRotate)
  useKeyPressEvent(6, handleRotate, handleRotate)
  useKeyPressEvent(7, handleRotate, handleRotate)
  useKeyPressEvent(8, handleRotate, handleRotate)
  useKeyPressEvent(9, handleRotate, handleRotate)
  useKeyPressEvent(0, handleRotate, handleRotate)



  const handleHover = (e) => {
    console.log(e)
    if(e.type == "keydown") hover(true)
    if(e.type == "keyup") hover(false)
    api.start({
      position:!hovered ? [0, 4.68, -0.62] : [0, 2.68, -0.62],
    })
    console.log("hover is " + (hovered ? "true" : "false"))
  }
  useKeyPressEvent(' ', handleHover, handleHover);

  return (  
    <group {...props} dispose={null}>
      <animated.group position={springs.position}>
        <mesh geometry={nodes.HandData.geometry} material={materials.Body} />
        <mesh geometry={nodes.HandData_1.geometry} material={materials.Body} />
      </animated.group>
      <animated.group position={[0, 1.48, 0.24]} rotation={springs.rotation}>
        <mesh geometry={nodes.DialData.geometry} material={materials.Body} />
        <mesh geometry={nodes.DialData_1.geometry} material={materials.Body} />
        <mesh geometry={nodes.DialData_2.geometry} material={materials.Body} />
      </animated.group>
      <mesh geometry={nodes.Stopper.geometry} material={materials.Stopper} position={[0, 1.48, 0.24]} rotation={[Math.PI / 4, 0.09, 0]} scale={[0.47, 1, 0.47]} />
      <mesh geometry={nodes.CenterPoleData.geometry} material={materials.Body} />
      <mesh geometry={nodes.CenterPoleData_1.geometry} material={materials.Index} />
      <mesh geometry={nodes.BodyData001.geometry} material={materials.Index} />
      <mesh geometry={nodes.BodyData001_1.geometry} material={materials.Body} />
    </group>
  )
}

useGLTF.preload('/kurodenwa.gltf')
