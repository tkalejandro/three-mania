const Placeholder = () => {
  return (
    <mesh position-y={0} position-x={0} scale={1}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color={'red'} />
    </mesh>
  );
};

export default Placeholder;
