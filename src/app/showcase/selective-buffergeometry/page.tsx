"use client";

import Navbar from "@/components/Navbar"
import { ContactShadows, Environment, OrbitControls, PresentationControls, Segment, SegmentObject, Segments, shaderMaterial, StatsGl } from "@react-three/drei"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import React from "react"
import { Leva, useControls } from 'leva'
import * as THREE from "three";
import { MaterialNode } from "@react-three/fiber";

const Page = () => {
  
  return (
    <>
      <Navbar title="Selective BufferGeometry" />
      <Leva />
      <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
        <StatsGl className="stats" />
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
            <AnimatedSegments />
        </PresentationControls>
        <OrbitControls />
        <Environment preset="city" />
      </Canvas>
    </>
  )
}

const AnimatedSegments = () => {
  const ref = React.useRef<SegmentObject[]>([])
  useFrame(({ clock }) => {
    ref.current.forEach((r, i) => {
      const time = clock.elapsedTime
      const x = Math.sin((i / 5000) * Math.PI) * 10
      const y = Math.cos((i / 5000) * Math.PI) * 10
      const z = Math.cos((i * time) / 1000)
      r.start.set(x, y, z)
      r.end.set(x + Math.sin(time + i), y + Math.cos(time + i), z)
      r.color.setRGB(x / 10, y / 10, z)
    })
  })
  return (
    <Segments limit={10000} lineWidth={0.1}>
      {Array.from({ length: 10000 }).map((_, i) => (
        <Segment key={i} ref={(r) => (ref.current[i] = r)} color="orange" start={[0, 0, 0]} end={[0, 0, 0]} />
      ))}
    </Segments>
  )
}

const numLat = 10;
const numLng = 20;
const radius = 1.0


const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  /*glsl*/`
    attribute float visible;
    varying float vVisible;
    attribute vec3 vertColor;
    varying vec3 vColor;

    void main() {

      vColor = vertColor;
      vVisible = visible;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,
  // fragment shader
  /*glsl*/`
    varying float vVisible;
    varying vec3 vColor;

    void main() {

      if ( vVisible > 0.0 ) {

        gl_FragColor = vec4( vColor, 1.0 );

      } else {

        discard;

      }

    }
  `
)


const Geometry = () => {
  const values = useControls({
    color: 'lightblue',
  })


  const geometry = new THREE.BufferGeometry();
	const linePositions = new Float32Array( numLat * numLng * 3 * 2 );
	const lineColors = new Float32Array( numLat * numLng * 3 * 2 );
	const visible = new Float32Array( numLat * numLng * 2 );

  for ( let i = 0; i < numLat; ++ i ) {

    for ( let j = 0; j < numLng; ++ j ) {

      const lat = ( Math.random() * Math.PI ) / 50.0 + i / numLat * Math.PI;
      const lng = ( Math.random() * Math.PI ) / 50.0 + j / numLng * 2 * Math.PI;

      const index = i * numLng + j;

      linePositions[ index * 6 + 0 ] = 0;
      linePositions[ index * 6 + 1 ] = 0;
      linePositions[ index * 6 + 2 ] = 0;
      linePositions[ index * 6 + 3 ] = radius * Math.sin( lat ) * Math.cos( lng );
      linePositions[ index * 6 + 4 ] = radius * Math.cos( lat );
      linePositions[ index * 6 + 5 ] = radius * Math.sin( lat ) * Math.sin( lng );

      const color = new THREE.Color( 0xffffff );

      color.setHSL( lat / Math.PI, 1.0, 0.2 );
      lineColors[ index * 6 + 0 ] = color.r;
      lineColors[ index * 6 + 1 ] = color.g;
      lineColors[ index * 6 + 2 ] = color.b;

      color.setHSL( lat / Math.PI, 1.0, 0.7 );
      lineColors[ index * 6 + 3 ] = color.r;
      lineColors[ index * 6 + 4 ] = color.g;
      lineColors[ index * 6 + 5 ] = color.b;

      // non-0 is visible
      visible[ index * 2 + 0 ] = 1.0;
      visible[ index * 2 + 1 ] = 1.0;

    }

  }

  geometry.setAttribute( 'position', new THREE.BufferAttribute( linePositions, 3 ) );
	geometry.setAttribute( 'vertColor', new THREE.BufferAttribute( lineColors, 3 ) );
	geometry.setAttribute( 'visible', new THREE.BufferAttribute( visible, 1 ) );

	geometry.computeBoundingSphere();

  
  return (
    <lineSegments geometry={geometry}>
      <colorShiftMaterial  />
    </lineSegments>
  )
}


extend({ ColorShiftMaterial })

// Add types to ThreeElements elements so primitives pick up on it
declare module '@react-three/fiber' {
  interface ThreeElements {
    colorShiftMaterial: MaterialNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>
  }
}

export default Page