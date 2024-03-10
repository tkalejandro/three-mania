import { useAppTheme } from '@/hooks';
import { GradientTexture, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Group, Mesh } from 'three';

// NATIVE THREE JS
const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const boxGeometry = new THREE.BoxGeometry();
const geometries = [torusGeometry, boxGeometry];
const material = new THREE.MeshMatcapMaterial();

const MainEnvironment = () => {
  const theme = useAppTheme();

  const tempArray: Mesh[] = useMemo(() => [...Array(100)], []); // Memoize the tempArray

  const decorationGeometriesRef = useRef<any>([]);
  const decorationContainerRef = useRef<Group>(null);
  useFrame((state, delta) => {
    for (const decoration of decorationGeometriesRef.current) {
      decoration.rotation.y += delta * 0.2;
    }

    if (decorationContainerRef && decorationContainerRef.current) {
      decorationContainerRef.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <>
      {/* GRADIENT BACKGROUND  */}
      <mesh scale={[1000, 1000, 1000]}>
        <sphereGeometry />
        <meshBasicMaterial side={THREE.BackSide}>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={[theme.colors.primary[500], theme.colors.secondary[500]]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
            innerCircleRadius={0} // Optional, the radius of the inner circle of the gradient, default = 0
            outerCircleRadius={'auto'} // Optional, the radius of the outer circle of the gradient, default = auto
          />
        </meshBasicMaterial>
      </mesh>
      <group ref={decorationContainerRef}>
        {tempArray.map((value, index) => {
          const getRandomGeometry = () => {
            const randomIndex = Math.floor(Math.random() * geometries.length);
            return geometries[randomIndex];
          };

          return (
            <mesh
              ref={(element) => (decorationGeometriesRef.current[index] = element)}
              key={index}
              material={material}
              geometry={getRandomGeometry()}
              position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
              ]}
              scale={0.3 + Math.random() * 0.2}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            />
          );
        })}
      </group>
    </>
  );
};

export default MainEnvironment;
