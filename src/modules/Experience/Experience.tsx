"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './R3FComponents/Box'
import { OrbitControls } from '@react-three/drei'

/**
 * Heart of the 3D App
 */
const Experience = () => {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )
}

export default Experience