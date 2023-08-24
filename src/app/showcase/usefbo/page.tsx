"use client";

import Navbar from "@/components/Navbar"
import { getWindowSize } from "@/hooks/getWindowSize";
import { Environment, Hud, OrbitControls , OrthographicCamera, PerspectiveCamera, Segment, Segments, useFBO} from "@react-three/drei"
import { Canvas, Color, Object3DNode, extend, useFrame, useThree } from "@react-three/fiber"
import { useControls } from "leva";
import React, { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three";

const Page = () => {
  
  return (
    <>
      <Navbar title="useFBO" />
      <Canvas>
        <Lights preset="city" />
        <Torus scale={2} />
        <Viewcube />
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

export default Page



function Viewcube({ renderPriority = 1, matrix = new THREE.Matrix4() }) {
  const { gl, size, scene, camera } = useThree()

  
  const values = useControls({ color1: "#a422e0", color2: "#a4200e", width: size.width / 10, height: size.height })
 
  const target = useFBO(size.width / 3, size.height / 3)
  const target2 = useFBO(100,100)



  
  
  // useFrame((state, delta) => {
  //   // Spin mesh to the inverse of the default cameras matrix

  //   state.gl.setRenderTarget(target)
  //   state.gl.render(scene, camera)


    
  //   // console.log(vector, target2.texture)
  //   // state.gl.setViewport(0, 0, target2.width, target2.height);
  //   state.gl.setRenderTarget(target2)
  //   state.gl.render(scene, camera)
  //   // state.gl.copyTextureToTexture(vector, target2.texture, target2.texture)
    
  //   // state.gl.setViewport(0, 0, size.width, size.height)
  //   state.gl.setRenderTarget(null)

  // })
  

  useFrame(() => {
    gl.setRenderTarget(target)
    gl.setScissor(target.width / 2 - target.height / 2 , target.height / 2  - target.height / 2 , target.height, target.height)
    gl.setScissorTest(true)
    gl.render(scene, camera)

    
    gl.setScissorTest(false)
    // gl.clearDepth()
    gl.setRenderTarget(target2)
    gl.render(scene, camera)
    
    gl.setRenderTarget(null)
  })
  
  return (
    <Hud
    //  renderPriority={renderPriority}
     >
      <OrthographicCamera makeDefault position={[0, 0, 100]} />
      <sprite scale={[target.height, target.height ,1]}
          position={[
            (- size.width / 2) + (target.height / 2) ,
            ( size.height / 2) - (target.height/ 2) ,
            1 ]}
        >
        <spriteMaterial
          color={values.color1}
          />
      </sprite>
      <sprite scale={[target.width, target.height ,1]}
        position={[
          (- size.width / 2) + (target.height / 2) ,
          ( size.height / 2) - (target.height/ 2) ,
          1 ]}
        >
          - halfWidth + halfImageWidth, halfHeight - halfImageHeight, 1
        <spriteMaterial
          map={target.texture}
          />
      </sprite>
      <Segments limit={1000} lineWidth={0.5}>
      <Segment
          start={[ -size.height / 2, -size.height /2 , 0]}
          end={[- size.height / 2, size.height /2 , 0]} color="black" />
      <Segment
          start={[ size.height / 2, -size.height /2 , 0]}
          end={[size.height / 2, size.height /2 , 0]} color="black" />
      <Segment
          start={[ -size.height / 2, size.height /2 , 0]}
          end={[size.height / 2, size.height /2 , 0]} color="black" />
      <Segment
          start={[ -size.height / 2, -size.height /2 , 0]}
          end={[ size.height / 2, -size.height /2 , 0]} color="black" />
      </Segments>
      <Lights preset="city" />
    </Hud>
  )
}