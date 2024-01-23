import { useGLTF } from "@react-three/drei"
import { PointsLoader } from "../components"
import { GroupProps } from "@react-three/fiber"
import { Group, Object3DEventMap, Texture } from "three"
import { Color } from '@react-three/fiber';
import { useEffect, useMemo, useState } from "react";

interface HeadModelProps extends GroupProps {
  selectedColor: Color,
  map: Texture
}

const HeadModel = ({ selectedColor, map, ...props }: HeadModelProps) => {
  const [gltfScene, setGltfScene] = useState<Group<Object3DEventMap> | null>(null);
  const { scene } = useGLTF('/models/head-3.glb')
  /**
   * Model created by @Hicham2012 and
   * inspired from this tutorial ↓
   * https://youtu.be/AlPPYkZg9D4?si=L_chsWglPCB2DAGk
   */
  // Let's ignore the issue for now
  // @ts-ignore
  const head = scene.children[0].geometry.clone()

  useEffect(() => {
    setGltfScene(scene)
  }, [])
  const cachedModel = useMemo(() => {
    if (gltfScene) {
      return (
        <group
          {...props}
        >
          <PointsLoader model={head} selectedColor={selectedColor} map={map} />
        </group>
      );
    } else {
      return null;
    }
  }, [props, gltfScene]);

  return cachedModel;
};

export default HeadModel;

useGLTF.preload('/models/head-3.glb')