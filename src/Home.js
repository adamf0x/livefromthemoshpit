import React from "react";
import "./styles/styles.scss";
import TitleText from "./TitleText";

import { Canvas, extend } from "@react-three/fiber";
import Box from "./Box";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { UnrealBloomPass } from "three-stdlib";
import { Floor } from "./Floor";
import Dome from "./Dome";

extend({ UnrealBloomPass });

const Home = (props) => {
  return (
    <div className="App">
      <div className="header-container">
        <TitleText text="Live from the moshpit"></TitleText>
        <a className="glitch glitch-link" href="http://localhost:3000/gallery">
          <span aria-hidden="true">Go to gallery</span>
          Go to gallery
          <span aria-hidden="true">Go to gallery</span>
        </a>
      </div>
      <div className="canvas-container">
        <Suspense fallback={null}>
          <Canvas className="canvas" shadows={true}>
            <OrbitControls enableZoom={false} enablePan={false} />
            <PerspectiveCamera
              makeDefault
              fov={60}
              position={[7, 4.5, 5]}
              zoom={1.3}
            />
            <color args={[0, 0, 0]} attach="background" />
            <spotLight
              color={[1, 0.25, 0.7]}
              intensity={1.5}
              angle={0.6}
              penumbra={0.5}
              position={[5, 5, 0]}
              castShadow
              shadowBias={-0.0001}
            />
            <spotLight
              color={[0.14, 0.5, 1]}
              intensity={2}
              angle={0.6}
              penumbra={0.5}
              position={[-5, 5, 0]}
              castShadow
              shadowBias={-0.0001}
            />
            <pointLight position={[0, 6, 0]} intensity={0.5}></pointLight>
            <group>
              <Floor></Floor>
              <Box></Box>
              <Dome></Dome>
            </group>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
