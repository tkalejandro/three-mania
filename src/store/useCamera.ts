import { create } from 'zustand';

interface CameraState {
  cameraPosition: [number, number, number];

  moveCameraCloser: () => void;
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

  return {
    cameraPosition: [0, 0, 2],
    moveCameraCloser,
  };
});

const useCamera = useCameraStore;

export default useCamera;
