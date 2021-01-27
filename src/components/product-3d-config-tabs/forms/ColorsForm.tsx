import React from "react";
import { Row, Col } from "antd";
import { useForm } from "react-hook-form";
import { ColorSlider } from "./sliders/color-slider/ColorSlider";
import { OrderButton } from "./buttons/OrderButton";

export type IColorsFormProps = {
 setActiveTabKey: (s: string) => void;
};

const ColorsForm: React.FC<IColorsFormProps> = ({ setActiveTabKey }) => {
 const { register, control, handleSubmit, watch, errors } = useForm();
 const [colorSliderValue, setColorSliderValue] = React.useState(50);
 const onSubmit = (data: any) => {
  alert("check the code");
  const submitData = { ...data, colorValue: colorSliderValue };
  console.log(submitData);
  setActiveTabKey("4");
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <Row>
     <Col span={24}>
      <ColorSlider returColorValue={(value) => setColorSliderValue(value)} />
     </Col>
    </Row>
    <Row>
     <Col span={24}>
      <textarea
       placeholder="More Details"
       className="textarea-custom"
       rows={3}
       name="details"
       ref={register({ required: true })}
      />
     </Col>
    </Row>
    <div style={{ alignSelf: "flex-end", marginTop: "auto" }}>
     <OrderButton title="Next" />
    </div>
   </div>
  </form>
 );
};

export { ColorsForm };
