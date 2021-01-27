import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";
import { DamageIndicatorIcon } from "../icons/DamageIndicatorIcon";
import { OrderButton } from "./buttons/OrderButton";
import { Dot } from "./Dot";

export type IMyOwnDesignFormProps = {};
const defaultDamageList = [
 {
  id: "0",
  img: "/damage-assets/1.png",
 },
 { id: "1", img: "/damage-assets/2.png" },
 {
  id: "2",
  img: "/damage-assets/3.png",
 },
];
const MyOwnDesignForm: React.FC<IMyOwnDesignFormProps> = ({}) => {
 const [drawerOpened, setDrawerOpened] = React.useState(false);
 const [owndesignlist, setDamageList] = React.useState(defaultDamageList);
 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => {
  if (errors) {
   console.log(errors);
  }
  alert("works");
  const myOwnSelectionCustom = {
   frontLeftSelectedTexture: frontLeftSelectedTexture,
   frontRightSelectedTexture: frontRightSelectedTexture,
   backPackSelectedTexture: backPackSelectedTexture,
  };
  const submitData = { ...data, myOwnSelectionCustom };
  console.log(submitData);
  setDrawerOpened(false);
 };
 const [textColorsList, setTextureColorsList] = React.useState<any>([
  {
   color: "",
   index: 0,
  },
  {
   color: "",
   index: 1,
  },
  {
   color: "",
   index: 2,
  },
 ]);

 const [selectedTexture, setSelectedTexture] = React.useState<any>(null);
 const [
  backPackSelectedTexture,
  setbackPackSelectedTexture,
 ] = React.useState<any>();
 const [
  frontRightSelectedTexture,
  setfrontRightSelectedTexture,
 ] = React.useState();
 const [
  frontLeftSelectedTexture,
  setfrontLeftSelectedTexture,
 ] = React.useState();
 const handleLeftFrontTexture = () => {
  const objectIdentifier = {
   ...selectedTexture,
   color: "#FF872A",
  };
  setSelectedTexture(objectIdentifier);
  setfrontLeftSelectedTexture(objectIdentifier);
 };

 const handleRightFrontTexture = () => {
  const objectIdentifier = {
   ...selectedTexture,
   color: "#06C170",
  };
  setSelectedTexture(objectIdentifier);
  setfrontLeftSelectedTexture(objectIdentifier);
 };

 const handleBackPackTexture = (backgroundColor: any) => {
  const objectIdentifier = {
   ...selectedTexture,
   color: "#7A9EC5",
  };
  setSelectedTexture(objectIdentifier);
  setfrontLeftSelectedTexture(objectIdentifier);
 };

 const handleSelectedTexture = React.useCallback(
  (item: any, index: number) => {
   if (selectedTexture) {
    let tempArray = [...textColorsList];
    tempArray[index].color = selectedTexture.color;
    setTextureColorsList(tempArray);
   }
  },
  [selectedTexture]
 );
 React.useEffect(() => {
  console.log("changed");
 }, [selectedTexture]);
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <Row>
    <Col span={24}>
     <LazerOpenModalButton
      title="Add your design"
      onClick={() => setDrawerOpened(true)}
     />
    </Col>
   </Row>
   <Row>
    <textarea
     placeholder="More Details"
     className="textarea-custom"
     rows={3}
     name="details"
     ref={register({ required: false })}
    />
   </Row>
   <Drawer
    height="calc(100vh)"
    placement="bottom"
    visible={drawerOpened}
    closable
    onClose={() => setDrawerOpened(false)}
   >
    <Row justify="center" style={{ width: "100%" }}>
     <h1>Add your design</h1>
    </Row>
    <Row className="container-configurator">
     <div className="my-own-design-configurator">
      <div className="my-own-config-col left">
       <div className="m-o-jean-img-container">
        <img src="/assets/jean-front.png" alt="demco jean front" />

        <button
         className={`circle-btn-shooser orange-btn-c  ${
          selectedTexture === frontLeftSelectedTexture ? "active" : ""
         }`}
         onClick={handleLeftFrontTexture}
        >
         <DamageIndicatorIcon />
        </button>
        <button
         className={`circle-btn-shooser green-btn-c ${
          selectedTexture === frontRightSelectedTexture ? "active" : ""
         }`}
         onClick={handleRightFrontTexture}
        >
         <DamageIndicatorIcon />
        </button>
       </div>
      </div>
      <div className="m-o-customizer-picker-container">
       <div className="filled-btn-picker-m-o">
        <DamageIndicatorIcon />
       </div>
       {owndesignlist.map((item, index) => (
        <div className="btn-with-dot-indicator" key={index}>
         <button
          className="btn-damage-chooser-mo"
          onClick={() => handleSelectedTexture(item, index)}
         >
          <img src={item.img} alt={`id alt icon demco${index}`} />
         </button>
         <Dot
          color={
           textColorsList &&
           textColorsList[index] &&
           textColorsList[index].color
            ? textColorsList[index].color
            : ""
          }
         />
        </div>
       ))}
      </div>
      <div className="my-own-config-col right">
       <div className="m-o-jean-img-container">
        <img src="/assets/jean-back.png" alt="demco jean back" />
        <button
         className={`circle-btn-shooser silver-btn-c ${
          selectedTexture === backPackSelectedTexture ? "active" : ""
         }`}
         onClick={handleBackPackTexture}
        >
         <DamageIndicatorIcon />
        </button>
       </div>
      </div>
     </div>
    </Row>
    <Row justify="center" align="middle" style={{ marginTop: "4rem" }}>
     <Col>
      <button
       type="reset"
       onClick={() => setDrawerOpened(false)}
       className="order-btn-h outlined-btn-h"
      >
       Discard
      </button>
     </Col>
     <Col>
      <button
       type="submit"
       onClick={handleSubmit(onSubmit)}
       className="order-btn-h"
      >
       Confirm
      </button>
     </Col>
    </Row>
   </Drawer>
  </form>
 );
};

export { MyOwnDesignForm };
