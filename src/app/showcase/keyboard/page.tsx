"use client";
import { CSSProperties, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, OrbitControls, AccumulativeShadows, Decal, RandomizedLight, useTexture, Stage } from '@react-three/drei'
import { Loader } from '@react-three/drei'
import React, { useRef }  from 'react'
import { Model } from './Keyboard';
import { useSpring, animated } from '@react-spring/web'

const Page = () => {
  const ref = useRef()


  return (
    <>
      <Suspense fallback={null}>
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Stage preset="rembrandt" intensity={1}  environment="city">
            <Model ref={ref} />
          </Stage>
          <OrbitControls ref={ref} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </Suspense>
      <Loader />
    </>
  )
}

export default Page