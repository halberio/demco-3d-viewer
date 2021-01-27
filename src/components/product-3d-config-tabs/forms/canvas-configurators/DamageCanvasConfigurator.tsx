import React from "react";
import { Row, Col } from "antd";
import ReactSlider from "react-slider";
import "./canvas-configurators.scss";
import { DamageIndicatorIcon } from "../../icons/DamageIndicatorIcon";

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
export type ILazerCanvasConfiguratorProps = {};

const DamageCanvasConfigurator: React.FC<ILazerCanvasConfiguratorProps> = () => {
 const [currentSizeValue, setCurrentSizeValue] = React.useState(50);
 const [currentIntensityValue, setCurrentIntensityValue] = React.useState(50);

 const [damageList, setDamageList] = React.useState(defaultDamageList);
 return (
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
 );
};

export { DamageCanvasConfigurator };
