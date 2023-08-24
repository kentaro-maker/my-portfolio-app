"use client";
import React, { useEffect, useRef, useState, Suspense, forwardRef, useImperativeHandle } from "react";
import Navbar from "@/components/Navbar";
import * as THREE from 'three'

import { Space_Mono } from 'next/font/google'
import { useKey } from "react-use";
import * as fabric from 'fabric'; // v6

import { Canvas, context, useFrame } from "@react-three/fiber";
import { Box, ContactShadows, Environment, OrbitControls, Plane, PresentationControls, Wireframe } from "@react-three/drei";

const spacemono = Space_Mono({weight:"400",   subsets: ['latin']})

const INCH = 25.4 // mm

const canvas = {
  width: 210,
  height: 297,
  ratio: 10,
  getCurrentWidth: () => {
    return canvas.width * canvas.ratio
  },
  getCurrentHeight: () => {
    return canvas.height * canvas.ratio
  },
  getCurrentInch: () => {
    return INCH * canvas.ratio
  }

}


const Page = () => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<THREE.Mesh>();

  const regexp = new RegExp(/\w/)
  const [lines, setLines] = useState<Array<string>>(null)

  const filter = (event:KeyboardEvent) => {
    // console.log(event.key)
    if(event.key.length == 1 && regexp.test(event.key)){
      return true
    } else if(event.key == ' '){
      return true
    } else if(event.key == 'Enter'){
      return true
    }
    return false
  }



  const press = (event:KeyboardEvent) => {
    // console.log(event.key)
    const ctx = canvasRef.current!.getContext('2d')!

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width * canvas.ratio, canvas.height * canvas.ratio);

    // Horizontal
    for(let i = INCH * canvas.ratio; i < canvas.width * canvas.ratio; i += INCH * canvas.ratio){
      ctx.beginPath	();
      ctx.strokeStyle = "blue";
      ctx.moveTo	(i, 0); 
      ctx.lineTo	(i, canvas.width * canvas.ratio); 
      ctx.stroke	();
    }
    // Vertical
    for(let i = INCH * canvas.ratio; i < canvas.height * canvas.ratio; i += INCH * canvas.ratio){
      ctx.beginPath	();
      ctx.strokeStyle = "red";
      ctx.moveTo	(0, i); 
      ctx.lineTo	(canvas.height * canvas.ratio, i); 
      ctx.stroke	();
    }

    const isEnter = event.key == 'Enter' ? true : false
    const t = isEnter ? '' : event.key
    ctx.fillStyle = "green";
    ctx.font = `${25.4 * canvas.ratio / 6}px ${spacemono.style.fontFamily}`;
    
    // console.log("lines is ", lines , !lines)
    if(!lines){
      // console.log("lines is empty:", lines)
      const measure = ctx.measureText(t)
      const lineHeight =  Math.abs(measure.fontBoundingBoxAscent) + Math.abs(measure.fontBoundingBoxDescent);
      drawText(ctx, [t],lineHeight)
      setLines([t])
      return true
    }
    
    let newLines = lines
    const last = newLines.pop();
    const measure = ctx.measureText( last + t )
    const lineHeight =  Math.abs(measure.fontBoundingBoxAscent) + Math.abs(measure.fontBoundingBoxDescent);
    const letterWidth =  Math.abs(measure.actualBoundingBoxLeft) + Math.abs(measure.actualBoundingBoxRight);

    console.log(lineHeight, letterWidth)
    if(isEnter || measure.width > canvas.width * canvas.ratio  - (25.4 * 2 * canvas.ratio)){
      // console.log("measure.width > width", last + t)
      newLines.push(last)
      newLines.push(t)
      boxRef.current.position.y -= 2.54 / 6
    } else {
      // console.log("NOT :measure.width > width", last + t)
      newLines.push(last + t)
      boxRef.current.position.x += 2.54 / 10

    }
    
    drawText(ctx, newLines, lineHeight)
    setLines(newLines)
  }

  function drawText(context: CanvasRenderingContext2D, array: Array<string>, lineHeight:number){
    array.forEach((item, index) => {
      // console.log("drawText item:", item)
      context.fillText(
        item,
        25.4 * canvas.ratio,
        25.4 * canvas.ratio + (lineHeight * (index + 1)))
    })
  }

  const vec = new THREE.Vector3()
  useEffect(() => {
    const ctx = canvasRef.current!.getContext('2d')!
    canvasRef.current.style.width = `${canvas.width}px`
    canvasRef.current.style.height = `${canvas.height}px`
    canvasRef.current.width = canvas.width * canvas.ratio
    canvasRef.current.height = canvas.height * canvas.ratio
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width * canvas.ratio, canvas.height * canvas.ratio);

    
   // Horizontal
   for(let i = INCH * canvas.ratio; i < canvas.width * canvas.ratio; i += INCH * canvas.ratio){
    ctx.beginPath	();
    ctx.strokeStyle = "blue";
    ctx.moveTo	(i, 0); 
    ctx.lineTo	(i, canvas.width * canvas.ratio); 
    ctx.stroke	();
  }
  // Vertical
  for(let i = INCH * canvas.ratio; i < canvas.height * canvas.ratio; i += INCH * canvas.ratio){
    ctx.beginPath	();
    ctx.strokeStyle = "red";
    ctx.moveTo	(0, i); 
    ctx.lineTo	(canvas.height * canvas.ratio, i); 
    ctx.stroke	();
  }
  }, []);


  useKey(filter, press, { event: 'keydown' });
  // useKey(filter, press, { event: 'keyup' });

  const arrayFilter = (event:KeyboardEvent) => {
    // console.log(event.key)
    if(event.key.startsWith('Arrow')){
      return true
    }
    return false
  }

    const arrayPress = (event:KeyboardEvent) => {
      // console.log(event.key)
      const direction = event.key.slice('Arrow'.length)
      console.log(direction)
      const transform = new THREE.Matrix4()
      switch(direction){
          case 'Up':
            transform.makeTranslation(0,1,0)
            break
            case 'Down':
            transform.makeTranslation(0,-1,0)
            break
            case 'Left':
            transform.makeTranslation(-1,0,0)
            break
          case 'Right':
            transform.makeTranslation(1,0,0)
            break
      }
      boxRef.current.applyMatrix4(transform)
      // boxRef.current.position
    }

  useKey(arrayFilter, arrayPress, { event: 'keydown' });

  return (
    <>
      <Navbar title="CanvasTexture" />
      <div className="w-full h-full flex flex-row">
        <div className="w-full bg-slate-200 flex items-center justify-center p 3">
          <canvas id="drawer" ref={canvasRef} />
        </div>
        <div className="w-full bg-slate-500">
          <Canvas shadows camera={{ position: [0, 0, 100], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
            <mesh ref={boxRef} position={[0, 0, 21/2 ]}>
              <boxGeometry args={[1,1,1]} />
              <meshBasicMaterial color="pink" wireframe />
            </mesh>
            <Paper />
            <OrbitControls />
            <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
            <Environment preset="city" />
          </Canvas>
        </div>
      </div>
    </>
  )
}



const Paper = () => {
  
  const matRef = useRef<THREE.MeshStandardMaterial>(null)
	const textureRef = useRef<THREE.CanvasTexture>()

  useEffect(() => {
    const drawer = document.getElementById('drawer')
    if(drawer){
      const canvasEl = drawer as HTMLCanvasElement
      // console.log(canvasEl)
      const texture = new THREE.CanvasTexture(canvasEl)
      texture.minFilter = THREE.NearestFilter
      texture.magFilter = THREE.NearestFilter
      matRef.current!.map = texture
      textureRef.current = texture
    }
  }, [])

  useFrame(() => {
    if (matRef.current) {
      matRef.current.needsUpdate = true
    }

    if (textureRef.current) {
      textureRef.current.needsUpdate = true
    }
  })
  return(
    <group>
      {/* <lineSegments position={[0,0,21/2]}>
        <wireframeGeometry>
        </wireframeGeometry>
      </lineSegments> */}
      <mesh rotation-y={ - Math.PI / 2 }>
          {[...Array(5)].map((_, index) => (
            <meshStandardMaterial attach={`material-${index + 1}`} key={index} color='orange' />
          ))}
          <meshStandardMaterial ref={matRef} attach="material-0"  />
          <boxGeometry args={[21, 29.7, 21]} />
      </mesh>
    </group>
  )
}

export default Page
