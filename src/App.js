import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function ModelA() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function ModelB() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
}

export default function App() {
  const [scanResult, setScanResult] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: 32 }}>
      {!scanResult && (
        <div>
          <h2>Scan QR Code to View 3D Model</h2>
          <div style={{ width: 360, margin: "0 auto" }}>
            <QrReader
              onResult={(result, error) => {
                if (!!result && result?.text !== scanResult) {
                  setScanResult(result.text);
                }
                if (!!error) {
                  // Optionally handle error
                }
              }}
              constraints={{ facingMode: "environment" }}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      )}

      {scanResult && (
        <div>
          <h3>
            Scanned result: <code>{scanResult}</code>
          </h3>
          <div style={{ width: 500, height: 400, margin: "0 auto" }}>
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 10, 5]} intensity={1} />
              <OrbitControls />
              {scanResult === "modelA" && <ModelA />}
              {scanResult === "modelB" && <ModelB />}
            </Canvas>
          </div>
          <button onClick={() => setScanResult("")}>Scan Again</button>
        </div>
      )}
    </div>
  );
}
