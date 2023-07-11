"use client";
import { CSSProperties, Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, OrbitControls, AccumulativeShadows, Decal, RandomizedLight, useTexture, Stage } from '@react-three/drei'
import { Loader } from '@react-three/drei'
import React, { useRef, useCallback  }  from 'react'
import KeyBoardProto, { Handler } from './Keyboard-proto';
import { useKey, useKeyPressEvent, useUpdateEffect } from 'react-use';


const key_filter = ['1','2','3','4','q','w','e','r','a','s','d','f','z','x','c','v',' ']

const Page = () => {
  const ref = useRef({} as Handler)
  

  const press = (event) => {
    if(event.type=="keydown"){
      ref.current.press(event)
    }else if(event.type=="keyup"){
      ref.current.press(event)
    }
  }
  const filter = (event) => key_filter.includes(event.key)
  
  useKey(filter, press, { event: 'keydown' });
  useKey(filter, press, { event: 'keyup' });

  return (
    <>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [-5, 5.5, 5], fov: 40 }}>
          <Stage preset="rembrandt" intensity={1}  environment="city">
            <Suspense fallback={null}>
              <KeyBoardProto ref={ref} />
            </Suspense>
          </Stage>
          <OrbitControls  makeDefault  minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        </Canvas>
    </>
  )
}

export default Page