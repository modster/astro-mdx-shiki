import { Canvas } from "@react-three/fiber"
import { Stars, PerspectiveCamera } from "@react-three/drei"

function StarField() {
    return (
        <>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 100]} />
                <Stars radius={100} depth={50} count={5000} factor={7} saturation={3} fade speed={0.1} />
            </Canvas>
        </>
    )
}

export default StarField
