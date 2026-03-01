"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh ref={meshRef} scale={2.2}>
                <Sphere args={[1, 64, 64]}>
                    <MeshDistortMaterial
                        color="#6366F1"
                        attach="material"
                        distort={0.35}
                        speed={2}
                        roughness={0.1}
                        metalness={0.8}
                        envMapIntensity={2}
                    />
                </Sphere>
            </mesh>
        </Float>
    );
}

function FloatingRing() {
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!ringRef.current) return;
        ringRef.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        ringRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    });

    return (
        <mesh ref={ringRef} position={[0, 0, 0]}>
            <torusGeometry args={[3.2, 0.04, 16, 100]} />
            <meshStandardMaterial color="#8B5CF6" transparent opacity={0.4} />
        </mesh>
    );
}

export default function HeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            frameloop="always"
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} color="#6366F1" />
            <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#8B5CF6" />
            <pointLight position={[0, 0, 3]} intensity={2} color="#A78BFA" distance={10} />
            <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.5} fade speed={0.5} />
            <AnimatedSphere />
            <FloatingRing />
        </Canvas>
    );
}
