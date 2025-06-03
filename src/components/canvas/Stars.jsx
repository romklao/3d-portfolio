import { Canvas, useFrame } from '@react-three/fiber'
import React, { useState, useRef, Suspense } from 'react'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { inSphere } from 'maath/random'

const Stars = (props) => {
  const ref = useRef()
  const pointCount = 1500 // 1500 points * 3 values = 4500
  const [sphere] = useState(() =>
    inSphere(new Float32Array(pointCount * 3), { radius: 1.2 }),
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
