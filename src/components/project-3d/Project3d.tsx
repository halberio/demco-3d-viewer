import React, { Suspense, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import ProductModel3D from "./ProductModel3D";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getMousePos } from "./tools";
import "./product-3d.scss";
import { PlusIcon } from "./PlusIcon";
import { MinusIcon } from "./MinusIcon";

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.

extend({ OrbitControls });
function Plane({ ...props }) {
 return (
  <mesh {...props} receiveShadow>
   <planeBufferGeometry args={[500, 500, 1, 1]} />
   <shadowMaterial transparent opacity={0.2} />
  </mesh>
 );
}

const CameraControls = () => {
 const {
  camera,
  gl: { domElement },
 } = useThree();
 const btnZoomIn = document.getElementById("btn-zoom-in");
 const btnZoomOut = document.getElementById("btn-zoom-out");
 const controls = useRef();

 React.useEffect(() => {
  if (btnZoomIn) {
   btnZoomIn.addEventListener("click", () => {
    //@ts-ignore
    camera.translateZ(-1);
    //@ts-ignore
    controls.current.update();
   });
  }
  if (btnZoomOut) {
   btnZoomOut.addEventListener("click", () => {
    //@ts-ignore
    camera.translateZ(1);
    //@ts-ignore
    controls.current.update();
   });
  }
 }, [btnZoomIn, btnZoomOut, camera]);
 // Ref to the controls, so that we can update them on every frame using useFrame

 //@ts-ignore
 useFrame((state) => controls.current.update());

 return (
  //@ts-ignore
  <orbitControls
   ref={controls}
   args={[camera, domElement]}
   enableZoom={true}
   maxAzimuthAngle={Math.PI}
   maxPolarAngle={Math.PI}
   minAzimuthAngle={-Math.PI}
   minPolarAngle={0}
   enableDamping
  />
 );
};
export type IProject3dProps = {};
const Project3d: React.FC<IProject3dProps> = () => {
 const d = 8.25;
 const mouse = useRef({ x: 0, y: 0 });

 return (
  <div className="product-3d">
   <Canvas
    style={{
     height: "100%",
     width: "100%",
     background: "#f2f2f2",
    }}
    onMouseMove={(e: any) => (mouse.current = getMousePos(e))}
    shadowMap
    pixelRatio={[1, 1.5]}
    camera={{ position: [0, -3, 20] }}
   >
    <CameraControls />
    <hemisphereLight
     skyColor={"black"}
     //@ts-ignore
     groundColor={0xf2f2f2}
     intensity={0.5}
     position={[0, 50, 0]}
    />
    {/* <directionalLight
     position={[-8, 20, 8]}
     shadow-camera-left={d * -1}
     shadow-camera-bottom={d * -1}
     shadow-camera-right={d}
     shadow-camera-top={d}
     shadow-camera-near={0.1}
     shadow-camera-far={1500}
     castShadow
    /> */}

    <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -10, 0]} />
    <Suspense fallback={null}>
     <ProductModel3D
      mouse={mouse}
      position={[0, -20, 0]}
      scale={[0.31, 0.31, 0.31]}
     />
    </Suspense>
   </Canvas>
   <div className="btns-3d-container">
    <button className="zoom-3d-btn" id={"btn-zoom-in"}>
     <PlusIcon />
    </button>
    <button className="zoom-3d-btn" id={"btn-zoom-out"}>
     <MinusIcon />
    </button>
    {/* <button id="change-texture-btn-3d">Change Texture</button> */}
   </div>
  </div>
 );
};

export { Project3d };
