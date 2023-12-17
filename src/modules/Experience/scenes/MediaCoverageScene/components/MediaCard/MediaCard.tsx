
import React, { useEffect, useRef, useState } from 'react';

import { MeshProps, extend, useFrame, useThree } from '@react-three/fiber'

import { mediaCardVertex, mediaCardFragment } from '../../../../shaders/mediaShader'
import * as THREE from 'three'
import { useTexture, Text, shaderMaterial } from '@react-three/drei';

// import {  } from "@react-three/drei"
// interface MediaCardTypes {
//   hovered: boolean;
// }
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'waveMaterial': ReactThreeFiber.Object3DNode<WaveMaterial, typeof WaveMaterial>
    }
  }
}
const MediaCard = () => {
  const [hovered, setHover] = useState<boolean>(false)
  const [value, setValue] = useState<number>(0)
  const [fixedElapse, setFixedElpase] = useState<number>(0)
  // console.log(value)
  const ref = useRef<any>()
  const time = useRef<any>(0)

  const { viewport, size } = useThree()
  const WaveMaterial = shaderMaterial(
    {
      uTime: 0,
      uFull: 1,
      uAmp: 0.10,
      uTexture: useTexture('/images/theLastOfUS.jpg'),
      resolution: new THREE.Vector2(),
      pointer: new THREE.Vector2(0.5, 0.5)
    },
    mediaCardVertex,
    mediaCardFragment
  )

  extend({ WaveMaterial })

  
  
  useFrame((state, delta) => {
    
    hovered ? ref.current.material.uTime = (state.clock.elapsedTime) : ref.current.material.uTime = fixedElapse
    time.current = state.clock.elapsedTime
    // console.log(ref.current.material.uTime);
    // console.log(state.clock.elapsedTime);
    // console.log('hi');
  })
  // ref.current.material.uTime  = 200
  // ref.current.material.uniforms.uTime = 200
  // console.log(ref.current.material.uniforms.uTime);
  // setValue(200)

  useEffect(() => {
    setFixedElpase(time.current)
  }, [hovered])

  return (
    <>
      {/* <Text>Title</Text> */}
      <mesh
        ref={ref}
        // scale={[6, 4.14213562373095, 1]}
        scale={[2, 1.2, 1]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <planeGeometry
          // scale={[6, 4.14213562373095, 1]}
        />
        {/* <meshBasicMaterial
          // color={'red'}
          map={texture}
        /> */}
        <waveMaterial key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} />
        {/* <shaderMaterial
          vertexShader={mediaCardVertex}
          fragmentShader={mediaCardFragment}
          uniforms={{
            uTime: { value: 0 },
            uFull: { value: 1 },
            uAmp: { value: 0.10 },
            uTexture: { value: new THREE.TextureLoader().load('https://cdn.discordapp.com/attachments/941095160517894185/1185574034314903632/theLastOfUS.jpg?ex=65901adc&is=657da5dc&hm=559d88b313e30fd624357c552f9d5b951054ca1af0c42f7fe4b76f1b11dd2b18&') },
            // uTexture: { value: texture },
            resolution: { value: new THREE.Vector2(size.width * viewport.dpr, size.height * viewport.dpr) },
            // pointer: { value: new THREE.Vector2(0.5, 0.5) }
          }}
        /> */}
      </mesh>
    </>

  )
}

export default MediaCard;