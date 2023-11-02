import { ModelPaths } from '@/types/ExperienceTypes';

export const modelPaths: ModelPaths[] = [
  { title: 'Guitar', path: '/models/guitar.gltf' },
  { title: 'Barn', path: '/models/barn.gltf' },
];

export const paths = modelPaths.map((i) => i.path);
export const titles = modelPaths.map((i) => i.title);
