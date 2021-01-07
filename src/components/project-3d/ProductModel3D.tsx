import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { getMouseDegrees } from "./tools";

export default function Model({ mouse, ...props }: any) {
 const group = useRef();
 //@ts-ignore
 //const { nodes, animations } = useLoader(GLTFLoader, "/stacy.glb");
 const model = useLoader(FBXLoader, "/Jeans.fbx");
 //const texture2 = useLoader(THREE.TextureLoader, "/texture2.jpg");

 const texture2 = React.useMemo(
  () => new THREE.TextureLoader().load("/texture2.jpg"),
  []
 );

 const texture1 = React.useMemo(
  () => new THREE.TextureLoader().load("/texture1.jpg"),
  []
 );
 const [texture, setTexture] = React.useState<any>(texture1);

 const btnChangeTexture = document.getElementById("change-texture-btn-3d");

 React.useEffect(() => {
  if (btnChangeTexture) {
   btnChangeTexture.addEventListener("click", () => {
    //@ts-ignore
    if (texture === texture2) {
     setTexture(texture1);
    } else {
     setTexture(texture2);
    }
   });
  }
 }, [btnChangeTexture]);

 return (
  <group ref={group} {...props} dispose={null}>
   <group rotation={[0, 0, 0]}>
    <primitive object={model} />
    {/* {texture && (
     <skinnedMesh
      receiveShadow
      castShadow
      geometry={nodes["stacy"].geometry}
      skeleton={nodes["stacy"].skeleton}
     >
      <meshStandardMaterial map={texture} map-flipY={false} skinning />
     </skinnedMesh>
    )} */}
   </group>
  </group>
 );
}
