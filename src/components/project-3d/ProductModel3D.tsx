import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { getMouseDegrees } from "./tools";

function moveJoint(mouse: any, joint: any, degreeLimit = 40) {
 let degrees = getMouseDegrees(mouse.current.x, mouse.current.y, degreeLimit);
 joint.rotation.xD = THREE.MathUtils.lerp(
  joint.rotation.xD || 0,
  degrees.y,
  0.1
 );
 joint.rotation.yD = THREE.MathUtils.lerp(
  joint.rotation.yD || 0,
  degrees.x,
  0.1
 );
 //@ts-ignore
 joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD);
 //@ts-ignore
 joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD);
}

export default function Model({ mouse, ...props }: any) {
 const group = useRef();
 //@ts-ignore
 const { nodes, animations } = useLoader(GLTFLoader, "/stacy.glb");
 const texture = useLoader(THREE.TextureLoader, "/stacy.jpg");

 const actions = useRef();
 //@ts-ignore
 const [mixer] = useState(() => new THREE.AnimationMixer());
 useFrame((state, delta) => mixer.update(delta));
 useEffect(() => {
  //@ts-ignore
  actions.current = { idle: mixer.clipAction(animations[8], group.current) };
  //@ts-ignore
  actions.current.idle.play();
  return () => animations.forEach((clip) => mixer.uncacheClip(clip));
 }, [mixer, animations]);

 useFrame((state, delta) => {
  mixer.update(delta);
  moveJoint(mouse, nodes.mixamorigNeck);
  moveJoint(mouse, nodes.mixamorigSpine);
 });

 return (
  <group ref={group} {...props} dispose={null}>
   <group rotation={[Math.PI / 2, 0, 0]}>
    <primitive object={nodes["mixamorigHips"]} />
    <skinnedMesh
     receiveShadow
     castShadow
     geometry={nodes["stacy"].geometry}
     skeleton={nodes["stacy"].skeleton}
    >
     <meshStandardMaterial map={texture} map-flipY={false} skinning />
    </skinnedMesh>
   </group>
  </group>
 );
}
