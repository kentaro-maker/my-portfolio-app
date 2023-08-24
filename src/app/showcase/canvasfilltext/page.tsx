"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import * as fabric from 'fabric'; // v6
import { Syne_Mono } from 'next/font/google'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture, Stage } from '@react-three/drei'
import * as THREE from 'three'

const synomono = Syne_Mono({weight:"400",subsets: ['latin']})
const width = 210
const height = 297

const Page = () => {

  const [str, setStr] = useState<string>('this is\na multiline\ntext\nwith\ncustom lineheight\n&background')
  const canvasEl = useRef<HTMLCanvasElement>(null);

  let canvas

  
  

  useEffect(() => {
    canvasEl.current.style.width = `${width}px`
    canvasEl.current.style.height = `${height}px`
    // const scale = window.devicePixelRatio; // 物理ピクセルのＣSSピクセル濃度
    // canvasEl.current.width = Math.floor(width * 2);
    // canvasEl.current.height = Math.floor(height * 2);
    
    canvas = new fabric.Canvas(canvasEl.current);
    // const canvas = new fabric.StaticCanvas(canvasEl.current);
    canvas.backgroundColor = "green"
    const text = new fabric.Text(str, {
      left: 25.4,
      top: 25.4,
      fontSize: 14,
      fontFamily: synomono.style.fontFamily
    })

    const t = new fabric.Text("a", {
      left:0,
      top:0,
      fontSize: 14,
      fontFamily: synomono.style.fontFamily
    })
    const canvasWidth =  canvas.getWidth()
    const textWidth = t.width
    const count =  Math.floor(canvasWidth / 60)
    console.log("canvas.getWidth:" + canvas.getWidth())
    console.log("text.width:" + t.width)
    console.log("calcWidth:" + count)

    canvas.add(t)
    canvas.add(text)
    // make the fabric.Canvas instance available to your app
    return () => {
      canvas.dispose();
    }
  }, []);


  return (
    <>
      <p className={synomono.className}>Canvas FillText</p>
      <div className="flex flex-row">
        <canvas ref={canvasEl}/>
        <input type="text"></input>
      </div>
      <div className="flex flex-row">
        <MyCanvas width={210} height={297} scale={0.5} backgroundColor="blue"/>
        <input type="text"></input>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [-5, 5.5, 5], fov: 40 }}>
          <Stage preset="rembrandt" intensity={1}  environment="city">
            <Suspense fallback={null}>
             <Model />
            </Suspense>
          </Stage>
          <OrbitControls  makeDefault  minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>
      <div className="flex flex-row">
        <MyCanvas width={210} height={100} scale={0.5} backgroundColor="yellow"/>
        <input type="text"></input>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [-5, 5.5, 5], fov: 40 }}>
          <Stage preset="rembrandt" intensity={1}  environment="city">
            <Suspense fallback={null}>
             <Model />
            </Suspense>
          </Stage>
          <OrbitControls  makeDefault  minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>
    </>
  )
}


const MyCanvas = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) {
      throw new Error("objectがnull");
    }
    const canvas = canvasRef.current;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("context取得失敗");
    }
    
    ctx.fillStyle = props.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    ctx.font = `${10 * props.scale}px ${synomono.style.fontFamily}`;
    ctx.fillText("scale:"+props.scale, 20 * props.scale, 20 * props.scale);
    console.log(synomono)
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} style={{width:`${props.width}px`, height:`${props.height}px` }} width={props.width * props.scale} height={props.height * props.scale} />
    </div>
  );
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
