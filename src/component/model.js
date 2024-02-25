import { Box, Sphere } from "@react-three/drei";
import React from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

const Model = () => {
  return (
    <mesh>
      <Sphere args={[2]}>
        <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
      </Sphere>
    </mesh>
  );
};

export default Model;
