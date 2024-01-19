import React, { useRef } from 'react';
import { Color, useFrame, useLoader } from '@react-three/fiber';
import { Mesh } from 'three';
import { useControls } from 'leva';
import { Point, useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GuitarModel } from '@/modules/Experience/models';

interface MovingFaceProps {
  scenePositionY: number;
  selectedColor: Color;
}

const MovingFace = ({ scenePositionY, selectedColor }: MovingFaceProps) => {
  const faceRef = useRef<Mesh | any>(null!);

  const {
    positionIntensityX,
    positionIntensityY,
    rotationIntensityX,
    rotationIntensityY,
    positionY,
  } = useControls('Face', {
    positionIntensityX: { value: 1.1, step: 0.001, min: 0, max: 2 },
    positionIntensityY: { value: 0.5, step: 0.001, min: 0, max: 2 },
    lookAtIntensity: { value: 2, step: 0.001, min: 0, max: 10 },
    positionY: { value: 4 },
    rotationIntensityX: { value: 0.25, step: 0.001, min: 0.001, max: 2 },
    rotationIntensityY: { value: 0.2, step: 0.001, min: 0.001, max: 2 },
  });

  

  const map1 = new THREE.TextureLoader().load('/textures/movingFace/note.png')
  const model = useGLTF('/models/head-2.glb')
  let uniforms = { mousePos: { value: new THREE.Vector3() } }
  const cursor = { x: 0, y: 0 }
  // Let's ignore the issue for now
  // @ts-ignore
  const modelGeo = model.scene.children[0].geometry.clone()
  const pmaterial = new THREE.PointsMaterial({
    color: new THREE.Color(`${selectedColor}`),
    // color: new THREE.Color('#000000'),
    size: 0.1,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    sizeAttenuation: true,
    alphaMap: map1
  })

  // Create the custom vertex shader injection
  pmaterial.onBeforeCompile = function(shader) {
    shader.uniforms.mousePos = uniforms.mousePos

    shader.vertexShader = `
      uniform vec3 mousePos;
      varying float vNormal;

      ${shader.vertexShader}`.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
        vec3 seg = (position * -.05) - mousePos;
        vec3 dir = normalize(seg);
        float dist = length(seg);
        if (dist < 1.5){
          float force = clamp(1.0 / (dist * dist), -0., .2);
          transformed += dir * log(force) * .25;
          vNormal = force /0.5;
        }
      `
    )
}
  const pointsMesh = new THREE.Points(modelGeo, pmaterial)
 
// Get apply current 
  document.addEventListener('mousemove', (event) => {
    event.preventDefault()
    cursor.x = -(event.clientX / window.innerWidth - 0.5)
    cursor.y = event.clientY / window.innerHeight - 0.5
    uniforms.mousePos.value.set(cursor.x, cursor.y, 0)
  }, false)
  useFrame((state, delta) => {
    // Mouse coordinates from -1 to 1
    const mouse = state.pointer;

    const mouseX = mouse.x;
    const mouseY = mouse.y;

    // Update mesh position based on mouse position
    if (faceRef.current) {
      faceRef.current.position.x = mouseX * positionIntensityX;
      // ScenePositionY is to correct the position of the face.

      faceRef.current.position.y = scenePositionY + positionY + mouseY * positionIntensityY;

      // Make the face look at the mouse
      faceRef.current.rotation.x = -mouseY * rotationIntensityX;
      faceRef.current.rotation.y = mouseX * rotationIntensityY;
      //faceRef.current.lookAt(mouseX * lookAtIntensity, mouseY * lookAtIntensity, 20);
    }
    // uniforms.mousePos.value.set(mouseX, mouseY, 0)
    

  });

  return (
      <group ref={faceRef} position={[0, scenePositionY + positionY , -0.3]} >
        <primitive object={pointsMesh} />
      </group>
  );
};

export default MovingFace;
