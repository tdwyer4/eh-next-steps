import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshLambertMaterial } from "three";
import { BoxGeometry } from "three";

export default function Box() {
    return (
        <mesh rotation={[90, 0, 20]}>
            <boxGeometry attach="geometry" args={[3, 3, 3]} />
            <meshLambertMaterial attach="material" color="blue" />
        </mesh>
    );
}