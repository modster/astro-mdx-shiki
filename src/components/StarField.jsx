import { PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function StarField() {
  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 100]} traverseAncestors={2} />
        <Stars radius={50} depth={22} count={10000} factor={2} saturation={100} fade speed={1} />
      </Canvas>
    </>
  );
}

export default StarField;
