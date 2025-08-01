import React from "react";

export default function ModelB() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}
