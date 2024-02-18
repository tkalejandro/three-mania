export default function MainLight() {
  return (
    <>
      <directionalLight castShadow position={[-0.25, 0.25, 1]} intensity={2.5} />
      <ambientLight intensity={1.5} />
    </>
  );
}
