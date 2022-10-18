import { React, useRef } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Mesh, TorusGeometry, BackSide } from "three";
import * as THREE from "three";
import { WebGLCubeRenderTarget, RGBFormat, LinearMipmapLinearFilter, CubeCamera} from "three";

const Dome = () =>{
    const { scene, gl } = useThree();
    const mesh1 = useRef(null);
    // useFrame(()=>{
    //     mesh1.current.rotation.y = mesh1.current.rotation.y + 0.005;
    //     mesh2.current.rotation.x = mesh2.current.rotation.x + 0.003;
    // })
    const cubeRenderTarget = new WebGLCubeRenderTarget(1024, {
        format: RGBFormat, 
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter,
    })
    const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
    cubeCamera.position.set(0,20,0);
    scene.add(cubeCamera);

    useFrame(()=>cubeCamera.update(gl, scene));

    const torus = [1,1]
    return(
        <mesh ref={mesh1} position={[0,0,0]}>
            <sphereBufferGeometry args={[30,50,50]}/>
            <meshBasicMaterial attach="material" envMap={cubeCamera.renderTarget.texture} roughness={0.1} metalness={1} side={THREE.DoubleSide}></meshBasicMaterial>
        </mesh>
    )
}

export default Dome
