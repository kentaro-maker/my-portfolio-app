"use client";
import React, { useRef, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Environment, ContactShadows, StatsGl } from '@react-three/drei'
import Navbar from '@/components/Navbar';


const Page = () => {
  return (
    <>
      <Navbar title="Cube Presentation" />
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <StatsGl className="stats" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
        <PresentationControls
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          global={false} // Spin globally or by dragging the model

          snap={false} // Snap-back to center (can also be a spring config)
          rotation={[0, 0, 0]} // Default rotation
          cursor={true} // Whether to toggle cursor style on drag

          polar={[-Infinity, Infinity]} 
          azimuth={[-Infinity, Infinity]} // Horizontal limits

          >
          <mesh>
            <boxGeometry args={[1.5,1.5,1.5]}/>
            <meshStandardMaterial color="yellow" />
          </mesh>
        </PresentationControls>
        <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
        <Environment preset="city" />
      </Canvas>
    </>
  )
}

export default Page
