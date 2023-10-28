"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { About, AudioLibrary, Contact, MediaCoverage, Welcome } from './components'
import ProjectsAwards from './components/ProjectsAwards/ProjectsAwards'


/**
 * Heart of the 3D App
 */
const Experience = () => {
    return (
        <Canvas>
            <OrbitControls />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Welcome position={[0, 0, 0]} />
            <About position={[4, -2, 0]} />
            <ProjectsAwards position={[0, -4, 0]} />
            <AudioLibrary position={[-4, -6, 0 ]} />
            <MediaCoverage position={[0, -8, 0]} />
            <Contact position={[4, -10, 0]} />
        </Canvas>
    )
}

export default Experience