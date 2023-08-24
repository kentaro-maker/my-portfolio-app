"use client";

import Navbar from "@/components/Navbar"
import { getWindowSize } from "@/hooks/getWindowSize";
import { Box, Environment, Hud, OrbitControls , OrthographicCamera, PerspectiveCamera, TorusKnot, useFBO, Plane} from "@react-three/drei"
import { Canvas, createPortal, extend, useFrame, useThree } from "@react-three/fiber"
import { stat } from "fs";
import React, { useEffect, useRef, useState } from "react"
import * as THREE from "three";
import { Vector2 } from "three";

const Page = () => {

  return (
    <>
      <Navbar title="Gomi" />
      <Canvas>
        <Lights preset="city" />
        <Torus scale={2} />
        <UseFBOScene color="blue" multisample samples={8} stencilBuffer={false} format={THREE.RGBAFormat} />
        <OrbitControls />
    </Canvas>
    </>
  )
}

function Torus(props) {
  const [hovered, hover] = useState(false)
  return (
    <mesh onPointerOver={(e) => hover(true)} onPointerOut={(e) => hover(false)} {...props}>
      <torusGeometry args={[1, 0.25, 32, 100]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Lights = ({ preset }) => {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Environment preset={preset} />
    </>
  )
}

const Gomi = () => {
  const [hovered, hover] = useState(null)
  const { size, viewport } = useThree()

  const vector = new THREE.Vector2()

  const textureRef =  useRef<THREE.FramebufferTexture>()

  useEffect(()=>{
  },[])

  useFrame((state, delta) => {
    
    textureRef.current = new THREE.FramebufferTexture(128,128, THREE.RGBAFormat)

    vector.x = ( size.width * viewport.dpr / 2 ) - ( 128 / 2 );
		vector.y = ( size.height * viewport.dpr / 2 ) - ( 128 / 2 );
   
    state.gl.copyFramebufferToTexture(vector, textureRef.current )
  })

  return (
    <sprite scale={[128,128,1]}
      position={[ size.width / 2 - 40, size.height / 2 - 40, 1 ]}
      onPointerOver={(e) => hover(true)} onPointerOut={(e) => hover(false)}
      >
      <spriteMaterial
        // color={hovered ? 'hotpink' : 'orange'}
        map={textureRef.current}
        />
    </sprite>
  )
}


const FramebufferTexture = () => {
  const { size, camera, scene, gl, viewport } = useThree();
  // const renderTarget = useRef(new THREE.WebGLRenderTarget(128, 128));
  const renderTarget = useRef( new THREE.FramebufferTexture( 128, 128, THREE.RGBAIntegerFormat));
  const matrix = new THREE.Matrix4()
  const mesh = useRef(null)

  const cameraOrtho = new THREE.OrthographicCamera( - size.width / 2, size.width / 2, size.height / 2, - size.height / 2, 1, 10 );
	cameraOrtho.position.z = 10;
  
  const vector = new Vector2();
  const target = useFBO(128,128)

  // Set up render loop
  useFrame(() => {
    
    matrix.copy(camera.matrix)
    mesh.current.quaternion.setFromRotationMatrix(matrix)
    
    // renderTarget.current.setSize(size.width, size.height);

    vector.x = 0
    vector.y = 0
    // Render your scene to the framebuffer texture
    gl.setRenderTarget(target);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

  });

  return (
    <>
      <mesh ref={mesh}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial map={target.texture} />
      </mesh>
      <sprite scale={[128,128,1]}
        position={[10,10, 1 ]}>
        
        <spriteMaterial
          map={target.texture} />
      </sprite>
    </>
  );
};

function UseFBOScene({ color = 'orange',  ...props }) {
  const cam = React.useRef<THREE.Camera>(null!)
  const { camera, scene, size, gl, viewport } = useThree()
  // const scene = React.useMemo(() => {
  //   const scene = new THREE.Scene()
  //   scene.background = new THREE.Color(color)
  //   return scene
  // }, [color])
  
  const target = useFBO(size.width, size.height, props)

  useEffect(()=>{
    console.log(size, cam.current ,scene, target, viewport)
  },[])
  
  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.render(scene, cam.current)
    state.gl.setRenderTarget(null)
  })

  return (
    <>
       <PerspectiveCamera ref={cam} aspect={3} position={[0, 0, 10]} />
        {/* {(texture) => ( 
           <sprite scale={[2,2,1]} position={[ 0,0,1 ]}>
            <spriteMaterial  map={texture} />
          </sprite>
          // <Plane args={[2, 2]} material-map={texture} />

        )}
      </PerspectiveCamera> */}
      {/* {createPortal(<SpinningThing />, scene)} */}
      {/* <Box args={[3, 3, 3]}>
        <meshStandardMaterial map={target.texture} />
      </Box> */}

      <sprite scale={[2,2,1]} position={[ 3,1,1 ]}>
            <spriteMaterial  map={target.texture} />
      </sprite>
    </>
  )
}

function SpinningThing() {
  const mesh = React.useRef<THREE.Mesh>(null!)
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01
  })
  return (
    <TorusKnot ref={mesh} args={[1, 0.4, 100, 64]}>
      <meshNormalMaterial />
    </TorusKnot>
  )
}
export default Page