import React, { useEffect, useRef, useState } from 'react';
import { softShadows, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';

softShadows();

const Box = ()=>{
    const mesh = useRef(null);
    useFrame(()=>{mesh.current.rotation.y = mesh.current.rotation.x -= 0.002})
    const cubeMap =  useTexture(["/textures/Screenshot_9.png","/textures/Screenshot_7.png","/textures/Screenshot_8.png","/textures/Screenshot_10.png","/textures/download.jpg","/textures/download2.jpg"]);
    return (
        <>
            <color args={[0,0,0]} attach="background"></color>
            <mesh ref={mesh} rotation={[90,0,20]} position={[0,-0.5,0]} castShadow>
                <boxBufferGeometry attach="geometry" args={[4,4,4]}/>
                {cubeMap.map((texture, idx) =>
                    <meshBasicMaterial key={texture.id} attach={`material-${idx}`} map={texture} />
                )}
            </mesh>
        </>
    )
}

export default Box
