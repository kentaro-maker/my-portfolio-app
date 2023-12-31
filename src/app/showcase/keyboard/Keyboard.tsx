/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.12 C:\Users\kenta\r3f-1\my-portfolio-app\keyboard.gltf --types
*/

import * as THREE from 'three'
import React, { useRef, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ThreeElements } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Cube164: THREE.Mesh
    Cube164_1: THREE.Mesh
    Cube164_2: THREE.Mesh
    Cube164_3: THREE.Mesh
    Cube164_4: THREE.Mesh
    Cube164_5: THREE.Mesh
    Cube164_6: THREE.Mesh
    Cube164_7: THREE.Mesh
    Cube164_8: THREE.Mesh
    Cube164_9: THREE.Mesh
    Cube164_10: THREE.Mesh
    Cube164_11: THREE.Mesh
    Cube164_12: THREE.Mesh
    Cube164_13: THREE.Mesh
    Cube164_14: THREE.Mesh
    Cube164_15: THREE.Mesh
    Cube164_16: THREE.Mesh
    Cube164_17: THREE.Mesh
    Cube164_18: THREE.Mesh
    Cube164_19: THREE.Mesh
    Cube164_20: THREE.Mesh
    Cube164_21: THREE.Mesh
    Cube164_22: THREE.Mesh
    Cube164_23: THREE.Mesh
    Cube164_24: THREE.Mesh
    Cube164_25: THREE.Mesh
    Cube164_26: THREE.Mesh
    Cube164_27: THREE.Mesh
    Cube164_28: THREE.Mesh
    Cube164_29: THREE.Mesh
    Cube164_30: THREE.Mesh
    Cube164_31: THREE.Mesh
    Cube164_32: THREE.Mesh
    Cube164_33: THREE.Mesh
    Cube164_34: THREE.Mesh
    Cube164_35: THREE.Mesh
    Cube164_36: THREE.Mesh
    Cube164_37: THREE.Mesh
    Cube164_38: THREE.Mesh
    Cube164_39: THREE.Mesh
    Cube164_40: THREE.Mesh
    ['Cap1-0']: THREE.Mesh
    ['Cap1-00']: THREE.Mesh
    ['Cap1-1']: THREE.Mesh
    ['Cap1-10']: THREE.Mesh
    ['Cap1-11']: THREE.Mesh
    ['Cap1-12']: THREE.Mesh
    ['Cap1-2']: THREE.Mesh
    ['Cap1-3']: THREE.Mesh
    ['Cap1-4']: THREE.Mesh
    ['Cap1-5']: THREE.Mesh
    ['Cap1-6']: THREE.Mesh
    ['Cap1-7']: THREE.Mesh
    ['Cap1-8']: THREE.Mesh
    ['Cap1-9']: THREE.Mesh
    ['Cap2-00']: THREE.Mesh
    ['Cap2-1']: THREE.Mesh
    ['Cap2-10']: THREE.Mesh
    ['Cap2-11']: THREE.Mesh
    ['Cap2-12']: THREE.Mesh
    ['Cap2-2']: THREE.Mesh
    ['Cap2-3']: THREE.Mesh
    ['Cap2-4']: THREE.Mesh
    ['Cap2-5']: THREE.Mesh
    ['Cap2-6']: THREE.Mesh
    ['Cap2-7']: THREE.Mesh
    ['Cap2-8']: THREE.Mesh
    ['Cap2-9']: THREE.Mesh
    ['Cap2-99']: THREE.Mesh
    ['Cap3-00']: THREE.Mesh
    ['Cap3-1']: THREE.Mesh
    ['Cap3-10']: THREE.Mesh
    ['Cap3-11']: THREE.Mesh
    ['Cap3-2']: THREE.Mesh
    ['Cap3-3']: THREE.Mesh
    ['Cap3-4']: THREE.Mesh
    ['Cap3-5']: THREE.Mesh
    ['Cap3-6']: THREE.Mesh
    ['Cap3-7']: THREE.Mesh
    ['Cap3-8']: THREE.Mesh
    ['Cap3-9']: THREE.Mesh
    ['Cap3-99']: THREE.Mesh
    ['Cap4-00']: THREE.Mesh
    ['Cap4-1']: THREE.Mesh
    ['Cap4-10']: THREE.Mesh
    ['Cap4-2']: THREE.Mesh
    ['Cap4-3']: THREE.Mesh
    ['Cap4-4']: THREE.Mesh
    ['Cap4-5']: THREE.Mesh
    ['Cap4-6']: THREE.Mesh
    ['Cap4-7']: THREE.Mesh
    ['Cap4-8']: THREE.Mesh
    ['Cap4-9']: THREE.Mesh
    ['Cap4-99']: THREE.Mesh
    ['Cap5-0']: THREE.Mesh
    ['Cap5-1']: THREE.Mesh
    ['Cap5-2']: THREE.Mesh
    ['Cap5-3']: THREE.Mesh
    ['Cap5-4']: THREE.Mesh
    ['Cap5-5']: THREE.Mesh
    ['Cap5-99']: THREE.Mesh
    CapSpace: THREE.Mesh
  }
  materials: {
    ['plate.001']: THREE.MeshStandardMaterial
    ['switch bottom.020']: THREE.MeshStandardMaterial
    ['switch.020']: THREE.MeshStandardMaterial
    ['switch bottom.021']: THREE.MeshStandardMaterial
    ['switch.021']: THREE.MeshStandardMaterial
    ['switch bottom.022']: THREE.MeshStandardMaterial
    ['switch.022']: THREE.MeshStandardMaterial
    ['switch bottom.023']: THREE.MeshStandardMaterial
    ['switch.023']: THREE.MeshStandardMaterial
    ['switch bottom.024']: THREE.MeshStandardMaterial
    ['switch.024']: THREE.MeshStandardMaterial
    ['switch bottom.025']: THREE.MeshStandardMaterial
    ['switch.025']: THREE.MeshStandardMaterial
    ['switch bottom.026']: THREE.MeshStandardMaterial
    ['switch.026']: THREE.MeshStandardMaterial
    ['switch bottom.027']: THREE.MeshStandardMaterial
    ['switch.027']: THREE.MeshStandardMaterial
    ['switch bottom.028']: THREE.MeshStandardMaterial
    ['switch.028']: THREE.MeshStandardMaterial
    ['switch bottom.029']: THREE.MeshStandardMaterial
    ['switch.029']: THREE.MeshStandardMaterial
    ['switch bottom.030']: THREE.MeshStandardMaterial
    ['switch.030']: THREE.MeshStandardMaterial
    ['switch bottom.031']: THREE.MeshStandardMaterial
    ['switch.031']: THREE.MeshStandardMaterial
    ['switch bottom.032']: THREE.MeshStandardMaterial
    ['switch.032']: THREE.MeshStandardMaterial
    ['switch bottom.033']: THREE.MeshStandardMaterial
    ['switch.033']: THREE.MeshStandardMaterial
    ['switch bottom.034']: THREE.MeshStandardMaterial
    ['switch.034']: THREE.MeshStandardMaterial
    ['switch bottom.035']: THREE.MeshStandardMaterial
    ['switch.035']: THREE.MeshStandardMaterial
    ['switch bottom.036']: THREE.MeshStandardMaterial
    ['switch.036']: THREE.MeshStandardMaterial
    ['switch bottom.037']: THREE.MeshStandardMaterial
    ['switch.037']: THREE.MeshStandardMaterial
    ['switch bottom.038']: THREE.MeshStandardMaterial
    ['switch.038']: THREE.MeshStandardMaterial
    ['switch bottom.039']: THREE.MeshStandardMaterial
    ['switch.039']: THREE.MeshStandardMaterial
    ['keycaps2.046']: THREE.MeshStandardMaterial
    ['keycaps.025']: THREE.MeshStandardMaterial
    ['keycaps2.050']: THREE.MeshStandardMaterial
    ['keycaps2.059']: THREE.MeshStandardMaterial
    ['keycaps2.060']: THREE.MeshStandardMaterial
    ['keycaps2.061']: THREE.MeshStandardMaterial
    ['keycaps2.051']: THREE.MeshStandardMaterial
    ['keycaps2.052']: THREE.MeshStandardMaterial
    ['keycaps2.053']: THREE.MeshStandardMaterial
    ['keycaps2.054']: THREE.MeshStandardMaterial
    ['keycaps2.055']: THREE.MeshStandardMaterial
    ['keycaps2.056']: THREE.MeshStandardMaterial
    ['keycaps2.057']: THREE.MeshStandardMaterial
    ['keycaps2.058']: THREE.MeshStandardMaterial
    ['keycaps.003']: THREE.MeshStandardMaterial
    ['keycaps2.049']: THREE.MeshStandardMaterial
    ['keycaps2.089']: THREE.MeshStandardMaterial
    ['keycaps2.090']: THREE.MeshStandardMaterial
    ['keycaps2.091']: THREE.MeshStandardMaterial
    ['keycaps2.081']: THREE.MeshStandardMaterial
    ['keycaps2.082']: THREE.MeshStandardMaterial
    ['keycaps2.083']: THREE.MeshStandardMaterial
    ['keycaps2.084']: THREE.MeshStandardMaterial
    ['keycaps2.085']: THREE.MeshStandardMaterial
    ['keycaps2.086']: THREE.MeshStandardMaterial
    ['keycaps2.087']: THREE.MeshStandardMaterial
    ['keycaps2.088']: THREE.MeshStandardMaterial
    ['keycaps.024']: THREE.MeshStandardMaterial
    ['keycaps.015']: THREE.MeshStandardMaterial
    ['keycaps2.047']: THREE.MeshStandardMaterial
    ['keycaps2.070']: THREE.MeshStandardMaterial
    ['keycaps2.071']: THREE.MeshStandardMaterial
    ['keycaps2.062']: THREE.MeshStandardMaterial
    ['keycaps2.063']: THREE.MeshStandardMaterial
    ['keycaps2.064']: THREE.MeshStandardMaterial
    ['keycaps2.065']: THREE.MeshStandardMaterial
    ['keycaps2.066']: THREE.MeshStandardMaterial
    ['keycaps2.067']: THREE.MeshStandardMaterial
    ['keycaps2.068']: THREE.MeshStandardMaterial
    ['keycaps2.069']: THREE.MeshStandardMaterial
    ['keycaps.026']: THREE.MeshStandardMaterial
    ['keycaps2.048']: THREE.MeshStandardMaterial
    ['keycaps2.080']: THREE.MeshStandardMaterial
    ['keycaps2.072']: THREE.MeshStandardMaterial
    ['keycaps2.073']: THREE.MeshStandardMaterial
    ['keycaps2.074']: THREE.MeshStandardMaterial
    ['keycaps2.075']: THREE.MeshStandardMaterial
    ['keycaps2.076']: THREE.MeshStandardMaterial
    ['keycaps2.077']: THREE.MeshStandardMaterial
    ['keycaps2.078']: THREE.MeshStandardMaterial
    ['keycaps2.079']: THREE.MeshStandardMaterial
    ['keycaps.027']: THREE.MeshStandardMaterial
    ['keycaps.017']: THREE.MeshStandardMaterial
    ['keycaps.018']: THREE.MeshStandardMaterial
    ['keycaps.019']: THREE.MeshStandardMaterial
    ['keycaps.022']: THREE.MeshStandardMaterial
    ['keycaps.021']: THREE.MeshStandardMaterial
    ['keycaps.020']: THREE.MeshStandardMaterial
    ['keycaps.023']: THREE.MeshStandardMaterial
    ['keycaps.016']: THREE.MeshStandardMaterial
  }
}


export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/model/keyboard.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Cap1-0'].geometry} material={materials['keycaps2.046']} />
      <mesh geometry={nodes['Cap1-00'].geometry} material={materials['keycaps.025']} />
      <mesh geometry={nodes['Cap1-1'].geometry} material={materials['keycaps2.050']} />
      <mesh geometry={nodes['Cap1-10'].geometry} material={materials['keycaps2.059']} />
      <mesh geometry={nodes['Cap1-11'].geometry} material={materials['keycaps2.060']} />
      <mesh geometry={nodes['Cap1-12'].geometry} material={materials['keycaps2.061']} />
      <mesh geometry={nodes['Cap1-2'].geometry} material={materials['keycaps2.051']} />
      <mesh geometry={nodes['Cap1-3'].geometry} material={materials['keycaps2.052']} />
      <mesh geometry={nodes['Cap1-4'].geometry} material={materials['keycaps2.053']} />
      <mesh geometry={nodes['Cap1-5'].geometry} material={materials['keycaps2.054']} />
      <mesh geometry={nodes['Cap1-6'].geometry} material={materials['keycaps2.055']} />
      <mesh geometry={nodes['Cap1-7'].geometry} material={materials['keycaps2.056']} />
      <mesh geometry={nodes['Cap1-8'].geometry} material={materials['keycaps2.057']} />
      <mesh geometry={nodes['Cap1-9'].geometry} material={materials['keycaps2.058']} />
      <mesh geometry={nodes['Cap2-00'].geometry} material={materials['keycaps.003']} />
      <mesh geometry={nodes['Cap2-1'].geometry} material={materials['keycaps2.049']} />
      <mesh geometry={nodes['Cap2-10'].geometry} material={materials['keycaps2.089']} />
      <mesh geometry={nodes['Cap2-11'].geometry} material={materials['keycaps2.090']} />
      <mesh geometry={nodes['Cap2-12'].geometry} material={materials['keycaps2.091']} />
      <mesh geometry={nodes['Cap2-2'].geometry} material={materials['keycaps2.081']} />
      <mesh geometry={nodes['Cap2-3'].geometry} material={materials['keycaps2.082']} />
      <mesh geometry={nodes['Cap2-4'].geometry} material={materials['keycaps2.083']} />
      <mesh geometry={nodes['Cap2-5'].geometry} material={materials['keycaps2.084']} />
      <mesh geometry={nodes['Cap2-6'].geometry} material={materials['keycaps2.085']} />
      <mesh geometry={nodes['Cap2-7'].geometry} material={materials['keycaps2.086']} />
      <mesh geometry={nodes['Cap2-8'].geometry} material={materials['keycaps2.087']} />
      <mesh geometry={nodes['Cap2-9'].geometry} material={materials['keycaps2.088']} />
      <mesh geometry={nodes['Cap2-99'].geometry} material={materials['keycaps.024']} />
      <mesh geometry={nodes['Cap3-00'].geometry} material={materials['keycaps.015']} />
      <mesh geometry={nodes['Cap3-1'].geometry} material={materials['keycaps2.047']} />
      <mesh geometry={nodes['Cap3-10'].geometry} material={materials['keycaps2.070']} />
      <mesh geometry={nodes['Cap3-11'].geometry} material={materials['keycaps2.071']} />
      <mesh geometry={nodes['Cap3-2'].geometry} material={materials['keycaps2.062']} />
      <mesh geometry={nodes['Cap3-3'].geometry} material={materials['keycaps2.063']} />
      <mesh geometry={nodes['Cap3-4'].geometry} material={materials['keycaps2.064']} />
      <mesh geometry={nodes['Cap3-5'].geometry} material={materials['keycaps2.065']} />
      <mesh geometry={nodes['Cap3-6'].geometry} material={materials['keycaps2.066']} />
      <mesh geometry={nodes['Cap3-7'].geometry} material={materials['keycaps2.067']} />
      <mesh geometry={nodes['Cap3-8'].geometry} material={materials['keycaps2.068']} />
      <mesh geometry={nodes['Cap3-9'].geometry} material={materials['keycaps2.069']} />
      <mesh geometry={nodes['Cap3-99'].geometry} material={materials['keycaps.026']} />
      <mesh geometry={nodes['Cap4-00'].geometry} material={materials['keycaps.003']} />
      <mesh geometry={nodes['Cap4-1'].geometry} material={materials['keycaps2.048']} />
      <mesh geometry={nodes['Cap4-10'].geometry} material={materials['keycaps2.080']} />
      <mesh geometry={nodes['Cap4-2'].geometry} material={materials['keycaps2.072']} />
      <mesh geometry={nodes['Cap4-3'].geometry} material={materials['keycaps2.073']} />
      <mesh geometry={nodes['Cap4-4'].geometry} material={materials['keycaps2.074']} />
      <mesh geometry={nodes['Cap4-5'].geometry} material={materials['keycaps2.075']} />
      <mesh geometry={nodes['Cap4-6'].geometry} material={materials['keycaps2.076']} />
      <mesh geometry={nodes['Cap4-7'].geometry} material={materials['keycaps2.077']} />
      <mesh geometry={nodes['Cap4-8'].geometry} material={materials['keycaps2.078']} />
      <mesh geometry={nodes['Cap4-9'].geometry} material={materials['keycaps2.079']} />
      <mesh geometry={nodes['Cap4-99'].geometry} material={materials['keycaps.027']} />
      <mesh geometry={nodes['Cap5-0'].geometry} material={materials['keycaps.017']} />
      <mesh geometry={nodes['Cap5-1'].geometry} material={materials['keycaps.018']} />
      <mesh geometry={nodes['Cap5-2'].geometry} material={materials['keycaps.019']} />
      <mesh geometry={nodes['Cap5-3'].geometry} material={materials['keycaps.022']} />
      <mesh geometry={nodes['Cap5-4'].geometry} material={materials['keycaps.021']} />
      <mesh geometry={nodes['Cap5-5'].geometry} material={materials['keycaps.020']} />
      <mesh geometry={nodes['Cap5-99'].geometry} material={materials['keycaps.023']} />
      <mesh geometry={nodes.CapSpace.geometry} material={materials['keycaps.016']} />
      <mesh geometry={nodes.Cube164.geometry} material={materials['plate.001']} />
      <mesh geometry={nodes.Cube164_1.geometry} material={materials['switch bottom.020']} />
      <mesh geometry={nodes.Cube164_2.geometry} material={materials['switch.020']} />
      <mesh geometry={nodes.Cube164_3.geometry} material={materials['switch bottom.021']} />
      <mesh geometry={nodes.Cube164_4.geometry} material={materials['switch.021']} />
      <mesh geometry={nodes.Cube164_5.geometry} material={materials['switch bottom.022']} />
      <mesh geometry={nodes.Cube164_6.geometry} material={materials['switch.022']} />
      <mesh geometry={nodes.Cube164_7.geometry} material={materials['switch bottom.023']} />
      <mesh geometry={nodes.Cube164_8.geometry} material={materials['switch.023']} />
      <mesh geometry={nodes.Cube164_9.geometry} material={materials['switch bottom.024']} />
      <mesh geometry={nodes.Cube164_10.geometry} material={materials['switch.024']} />
      <mesh geometry={nodes.Cube164_11.geometry} material={materials['switch bottom.025']} />
      <mesh geometry={nodes.Cube164_12.geometry} material={materials['switch.025']} />
      <mesh geometry={nodes.Cube164_13.geometry} material={materials['switch bottom.026']} />
      <mesh geometry={nodes.Cube164_14.geometry} material={materials['switch.026']} />
      <mesh geometry={nodes.Cube164_15.geometry} material={materials['switch bottom.027']} />
      <mesh geometry={nodes.Cube164_16.geometry} material={materials['switch.027']} />
      <mesh geometry={nodes.Cube164_17.geometry} material={materials['switch bottom.028']} />
      <mesh geometry={nodes.Cube164_18.geometry} material={materials['switch.028']} />
      <mesh geometry={nodes.Cube164_19.geometry} material={materials['switch bottom.029']} />
      <mesh geometry={nodes.Cube164_20.geometry} material={materials['switch.029']} />
      <mesh geometry={nodes.Cube164_21.geometry} material={materials['switch bottom.030']} />
      <mesh geometry={nodes.Cube164_22.geometry} material={materials['switch.030']} />
      <mesh geometry={nodes.Cube164_23.geometry} material={materials['switch bottom.031']} />
      <mesh geometry={nodes.Cube164_24.geometry} material={materials['switch.031']} />
      <mesh geometry={nodes.Cube164_25.geometry} material={materials['switch bottom.032']} />
      <mesh geometry={nodes.Cube164_26.geometry} material={materials['switch.032']} />
      <mesh geometry={nodes.Cube164_27.geometry} material={materials['switch bottom.033']} />
      <mesh geometry={nodes.Cube164_28.geometry} material={materials['switch.033']} />
      <mesh geometry={nodes.Cube164_29.geometry} material={materials['switch bottom.034']} />
      <mesh geometry={nodes.Cube164_30.geometry} material={materials['switch.034']} />
      <mesh geometry={nodes.Cube164_31.geometry} material={materials['switch bottom.035']} />
      <mesh geometry={nodes.Cube164_32.geometry} material={materials['switch.035']} />
      <mesh geometry={nodes.Cube164_33.geometry} material={materials['switch bottom.036']} />
      <mesh geometry={nodes.Cube164_34.geometry} material={materials['switch.036']} />
      <mesh geometry={nodes.Cube164_35.geometry} material={materials['switch bottom.037']} />
      <mesh geometry={nodes.Cube164_36.geometry} material={materials['switch.037']} />
      <mesh geometry={nodes.Cube164_37.geometry} material={materials['switch bottom.038']} />
      <mesh geometry={nodes.Cube164_38.geometry} material={materials['switch.038']} />
      <mesh geometry={nodes.Cube164_39.geometry} material={materials['switch bottom.039']} />
      <mesh geometry={nodes.Cube164_40.geometry} material={materials['switch.039']} />
    </group>
  )
}

useGLTF.preload('/model/keyboard.gltf')
