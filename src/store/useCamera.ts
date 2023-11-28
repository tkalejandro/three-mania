import { Vector3 } from '@react-three/fiber';
import { create } from 'zustand';

interface CameraState {
  cameraPosition: [number, number, number];
  aboutPosition: Vector3;

  nextPosition?: Vector3;
  moveCameraCloser: () => void;
  moveTo: (value: string) => void;
}

/**
 * All related to the App X Developer. Debugger Settings and more
 */
const useCameraStore = create<CameraState>((set) => {
  const moveCameraCloser = () => {
    set((state) => ({
      cameraPosition: [
        state.cameraPosition[0],
        state.cameraPosition[1],
        state.cameraPosition[2] - 1,
      ],
    }));
  };

  const moveTo = (value: string) => set({ nextPosition: [4, -2, 0] });

  return {
    cameraPosition: [0, 0, 2],
    aboutPosition: [4, -2, 0],
    moveCameraCloser,
  };
});

const useCamera = useCameraStore;

export default useCamera;
