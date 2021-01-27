import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";
import { BackDamageCanvas } from "./canvas/BackDamageCanvas";
import { FrontDamageCanvas } from "./canvas/FrontDamageCanvas";
//@ts-ignore
import { useScreenshot, createFileName } from "use-react-screenshot";
import { DamageIndicatorIcon } from "../icons/DamageIndicatorIcon";
export type IDamageFormProps = {};

const defaultDamageList = [
 {
  id: "0",
  color: "#FF872A",
  img: "/damage-assets/1.png",
 },
 {
  id: "1",
  color: "#06C170",
  img: "/damage-assets/2.png",
 },
 {
  id: "2",
  color: "#7A9EC5",
  img: "/damage-assets/3.png",
 },
];
const DamageForm: React.FC<IDamageFormProps> = ({}) => {
 const [drawerOpened, setDrawerOpened] = React.useState(false);
 const ref = React.useRef(null);

 const [damageList, setDamageList] = React.useState(defaultDamageList);
 const [image, takeScreenshot] = useScreenshot();
 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => console.log(data);

 const screenShotHandler = React.useCallback(() => {
  takeScreenshot(ref.current);
  alert("check the code we have a screen shot");
  console.log(image);
 }, []);
 React.useEffect(() => {
  if (image) {
   console.log(image);
   // download the image async if we want
   setDrawerOpened(false);
  }
 }, [image]);
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <Row>
    <Col span={24}>
     <LazerOpenModalButton
      title="Identify Damage Area"
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
     ref={register({ required: true })}
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
     <h1>Identify Damages Area</h1>
    </Row>
    <Row className="container-configurator" id="config-2" ref={ref}>
     <Col span={12}>
      <FrontDamageCanvas />
     </Col>
     <div className="configurator">
      <Row style={{ width: "100%" }}>
       <Col span={24}>
        <Row gutter={[0, 24]} justify="center">
         <button className="choose-cursor-btn">
          <DamageIndicatorIcon />
         </button>
        </Row>
        <Row gutter={[0, 24]} justify="center">
         {damageList.map((item, index) => (
          <button className="btn-damage-chooser" key={index}>
           <img src={item.img} alt={`id alt icon demco${index}`} />
          </button>
         ))}
        </Row>
        <Row style={{ width: "100%" }} justify="space-between"></Row>
       </Col>
      </Row>
     </div>
     <Col span={12}>
      <BackDamageCanvas />
     </Col>
    </Row>
    <Row
     justify="center"
     align="middle"
     style={{
      marginTop: "1rem",
      zIndex: 99999999,
     }}
    >
     <button
      type="button"
      onClick={() => setDrawerOpened(false)}
      className="order-btn-h outlined-btn-h"
     >
      Discard
     </button>
     <button type="submit" onClick={screenShotHandler} className="order-btn-h">
      Confirm
     </button>
    </Row>
   </Drawer>
  </form>
 );
};

export { DamageForm };
