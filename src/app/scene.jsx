"use client";
import Model from "../component/model";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Model />
    </Canvas>
  );
};

export default Scene;
