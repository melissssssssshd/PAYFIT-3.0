"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment, Sphere } from "@react-three/drei"
import { useRef, useState } from "react"
import { Box } from "@mantine/core"

function FloatingShape() {
  const meshRef = useRef<any>(null)
  const [hovered, setHover] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(t / 4) / 2
      meshRef.current.rotation.y = Math.sin(t / 4) / 2
      meshRef.current.rotation.z = Math.sin(t / 4) / 2
      meshRef.current.position.y = Math.sin(t / 1.5) / 10
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
      <mesh
        ref={meshRef}
        scale={30}
        position={[0, -6, -2]}
        rotation={[Math.PI / 2.5, 0, 0]} // Tilted to look like an arch
      >
        <torusGeometry args={[1, 0.25, 64, 128, Math.PI * 2]} />
        <MeshDistortMaterial
          color="#c084fc"
          emissive="#6b21a8"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          distort={0.2}
          speed={0.5}
        />
      </mesh>
    </Float>
  )
}

export function Hero3D() {
  return (
    <Box style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <pointLight position={[0, -5, 5]} intensity={2} color="#d8b4fe" />
          <FloatingShape />
          <Environment preset="studio" />
        </Canvas>
    </Box>
  )
}
