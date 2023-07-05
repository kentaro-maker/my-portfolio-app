"use client";
import {
  useRef,
  useEffect,
  useCallback,
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react'
import { useSpring, animated } from '@react-spring/three'
import { Canvas, useFrame} from '@react-three/fiber'
import { Vector2 } from 'three'
import { useGLTF, Stage, useCursor, Grid, OrbitControls, Environment, PivotControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {useKeyPressEvent, useKeyPress} from 'react-use';


const MeshBasicMaterial = forwardRef((props, ref) => {
  return (
    <meshStandardMaterial ref={ref}>
      {props.children}
    </meshStandardMaterial>
    )
  })
  
const AnimatedMeshBasicMaterial = animated(MeshBasicMaterial)

const Phone = forwardRef(({}, ref) => {
  const [vector2] = useState(() => new Vector2())
  const [hovered, hover] = useState(false);


  const [springs, api] = useSpring(
    () => ({
      scale: 1,
      color:hovered ? '#569AFF' : '#ff6d6d',
      position: hovered ? [0, 1, 0] :  [0,0,0],
      config: {
        mass: 0.1,
        friction: 14,
        tension: 170,
        precision: 0.0001,
      },
    }),
    []
  )

  useImperativeHandle(ref, () => ({
    getCurrentPosition: () => vector2,
  }))


  const handleHover = (e) => {
    console.log(e)
    if(e.type == "keydown") hover(true)
    if(e.type == "keyup") hover(false)
    api.start({
      color: !hovered ? '#569AFF' : '#ff6d6d',
      position:!hovered ? [0, 1, 0] : [0,0,0],
    })
  }

  useKeyPressEvent(' ', handleHover, handleHover);



  const handleClick = useCallback(() => {
    let clicked = false

    return () => {
      clicked = !clicked


      api.start({
        color: clicked ? '#569AFF' : '#ff6d6d',
        position: clicked? [0, 1, 0] :  [0,0,0],
      })
    }
  }, [])
  
  return (
    <animated.mesh
     
      onClick={handleClick()}
      scale={springs.scale}
      position={springs.position}>
      <boxGeometry args={[0.5, 0.5, 2]}/>
      <AnimatedMeshBasicMaterial

        color={springs.color}
      />
    </animated.mesh>
  )
})


const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const Body = forwardRef(({}, ref) => {
  const [rotated, rotate] = useState(false);

  const handleNum = (e) => {
    const digit = parseInt(e.key) > 0 ? parseInt(e.key) + 1 : 11
    const rad = Math.PI / 6 * digit
    console.log(e.key + ", " + rad)
    if(e.type == "keydown") rotate(true)
    if(e.type == "keyup") rotate(false)
    api.start({
      rotation: rotated ? [0, 0, Math.PI / 2]:[ -rad, 0, Math.PI / 2]
    })
  }

  for (const key of keys) useKeyPressEvent(key, handleNum, handleNum)
  


  const cy = useRef()
  const [hovered, set] = useState()
  useCursor(hovered, /*'pointer', 'auto'*/)



  const [springs, api] = useSpring(
    () => ({
      rotation: [0, 0, Math.PI / 2],
      config: {
        mass: 1,
        friction: 30,
        tension: 200,
        precision: 0.0001,
      },
    }),
    []
  )

  return (
    <group ref={ref} position={[0,-0.7,0]}>
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]}  />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <animated.group
         ref={cy}
          position={[2,0,0]}
          rotation={springs.rotation}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}>
        <mesh>
          <cylinderGeometry args={[0.65, 0.65, 0.2, 8]} />
          <meshStandardMaterial color="gray" />
        </mesh>
        <mesh position={[0,0,0.5]}>
          <cylinderGeometry args={[0.1, 0.1, 0.2, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </animated.group>
    </group>
  )
})



export default function MyComponent() {
  const blobApi = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (blobApi.current) {
        const { x, y } = blobApi.current.getCurrentPosition()
        console.log('the blob is at position', { x, y })
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <Canvas gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [-15, 0, 10], fov: 25 }}>
      <ambientLight intensity={0.8} />
      <pointLight intensity={1} position={[0, 6, 0]} />
      <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={ 0 } maxPolarAngle={Math.PI / 2} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.8} />
      <Phone ref={blobApi} />
      <Body />
    </Canvas>
    </>
  )
}