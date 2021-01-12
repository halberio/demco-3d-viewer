import React from "react";
import { Row, Col } from "antd";
import ReactSlider from "react-slider";
import "./canvas-configurators.scss";
import { EditBrushIcon } from "../../icons/EditBrushIcon";
export type ILazerCanvasConfiguratorProps = {};

const LazerCanvasConfigurator: React.FC<ILazerCanvasConfiguratorProps> = () => {
 const [currentSizeValue, setCurrentSizeValue] = React.useState(50);
 const [currentIntensityValue, setCurrentIntensityValue] = React.useState(50);
 return (
  <Row style={{ width: "100%" }}>
   <Col span={24}>
    <Row gutter={[0, 24]} justify="center">
     <button className="choose-cursor-btn">
      <EditBrushIcon />
     </button>
    </Row>
    <Row style={{ width: "100%" }} justify="space-between">
     <Col span={12}>
      <Row justify="center" style={{ marginBottom: "2rem" }}>
       <div className="title-config">Size</div>
      </Row>
      <Row justify="center" style={{ marginBottom: "1rem" }}>
       <div className="circle-color" />
      </Row>
      <Row justify="center">
       <ReactSlider
        className="vertical-slider-configurator"
        thumbClassName="thumb"
        trackClassName="track"
        min={0}
        orientation="vertical"
        max={100}
        value={currentSizeValue}
        onChange={(value: any) => setCurrentSizeValue(value)}
        renderThumb={(props, state) => <div {...props}></div>}
       />
      </Row>
      <Row justify="center" style={{ marginTop: "1rem", marginRight: "1px" }}>
       <div className="circle-color small" />
      </Row>
     </Col>
     <Col span={12}>
      <Row justify="center" style={{ marginBottom: "2rem" }}>
       <div className="title-config">Intensity</div>
      </Row>
      <Row justify="center" style={{ marginBottom: "1.6rem" }}>
       <div className="sub-title-config">Lighter</div>
      </Row>
      <Row justify="center">
       <ReactSlider
        className="vertical-slider-configurator"
        thumbClassName="thumb"
        trackClassName="track"
        min={0}
        orientation="vertical"
        max={100}
        value={currentIntensityValue}
        onChange={(value: any) => setCurrentIntensityValue(value)}
        renderThumb={(props, state) => <div {...props}></div>}
       />
      </Row>
      <Row justify="center" style={{ marginTop: ".4rem" }}>
       <div className="sub-title-config">Stronger</div>
      </Row>
     </Col>
    </Row>
   </Col>
  </Row>
 );
};

export { LazerCanvasConfigurator };
