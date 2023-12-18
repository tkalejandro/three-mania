import React, { useEffect, useRef, useState } from 'react';
import { MeshProps, Object3DNode, extend, useFrame, useThree, Vector3 } from '@react-three/fiber'
import { mediaCardVertex, mediaCardFragment } from '../../../../shaders/mediaShader'
import * as THREE from 'three'
import { useTexture, Text, shaderMaterial } from '@react-three/drei';

interface MediaProps {
  scale: Vector3;
  position: Vector3;
  title: string;
  image: string;
}

const MediaCard = ({scale, position, title, image}: MediaProps) => {
  const [hovered, setHover] = useState<boolean>(false)
  const [fixedElapse, setFixedElpase] = useState<number>(0)
  const ref = useRef<any>()
  const time = useRef<any>(0)
  const { viewport, size } = useThree()

  const WaveMaterial = shaderMaterial(
    {
      uTime: 0,
      uTexture: useTexture(image),
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
  })

  useEffect(() => {
    setFixedElpase(time.current)
  }, [hovered])

  return (
    <group scale={scale} position={position}>
      <Text position={[-0.5, 0.75, 0] } scale={0.4} color={'red'}>{title}</Text>
      <mesh
        ref={ref}
        scale={[2, 1.2, 1]}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <planeGeometry />
        {
          /* @ts-ignore */
          <waveMaterial key={WaveMaterial.key} resolution={[size.width * viewport.dpr, size.height * viewport.dpr]} />
        }
      </mesh>
    </group>

  )
}

export default MediaCard;