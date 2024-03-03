import { Color } from '@react-three/fiber';
import { BufferGeometry, NormalOrGLBufferAttributes, Texture } from 'three';
import * as THREE from 'three';

interface PointsLoaderProps {
  model: BufferGeometry<NormalOrGLBufferAttributes>;
  selectedColor: Color;
  map: Texture;
  mousemove: boolean;
}
const PointsLoader = ({ model, selectedColor, map, mousemove }: PointsLoaderProps) => {
  let uniforms = { mousePos: { value: new THREE.Vector3() } };
  const cursor = { x: 0, y: 0 };
  const pmaterial = new THREE.PointsMaterial({
    color: new THREE.Color(`${selectedColor}`),
    size: 0.1,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    sizeAttenuation: true,
    alphaMap: map,
  });

  /**
   * Create the custom vertex shader injection
   * This allow us to mix two material
   * and have new effect.
   * An easier way to reach this effect
   * is by using CustomShaderMaterial
   */
  pmaterial.onBeforeCompile = function (shader) {
    shader.uniforms.mousePos = uniforms.mousePos;

    shader.vertexShader = `
      uniform vec3 mousePos;
      varying float vNormal;

      ${shader.vertexShader}`.replace(
      `#include <begin_vertex>`,
      `#include <begin_vertex>
        // Calculate difference between
        // mouse and model position
        // to get direction and distance
        vec3 seg = (position * -0.03) - mousePos;
        vec3 direction = normalize(seg);
        float distance = length(seg);
        // apply force if distance between
        // mouse and points is lower than 1.5
        if (distance < 1.5){
          float force = clamp(1.0 / (distance * distance), -0., .2);
          transformed += direction * log(force) * .25;
          vNormal = force /0.5;
        }
      `,
    );
  };
  const pointsMesh = new THREE.Points(model, pmaterial);
  pointsMesh.rotation.y = 3

  /**
   * Calculate mouse position separately
   * so we can animate the model while hovering
   * around it without worrying about it
   * sticking to the mouse :-)
   */
  document.addEventListener(
    'mousemove',
    (event) => {
      if (!mousemove) {
        // Don't react to this event
        return;
      }
      event.preventDefault();
      cursor.x = (event.clientX / window.innerWidth - 0.5);
      cursor.y = event.clientY / window.innerHeight - 0.5;
      uniforms.mousePos.value.set(cursor.x, cursor.y, 0);
    },
    false,
  );

  return <primitive object={pointsMesh} />;
};

export default PointsLoader;
