import React from "react";
import { Row, Col } from "antd";
import { useForm } from "react-hook-form";
import { ColorSlider } from "./sliders/color-slider/ColorSlider";

export type IColorsFormProps = {};

const ColorsForm: React.FC<IColorsFormProps> = ({}) => {
 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => console.log(data);

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <Row>
    <Col span={24}>
     <ColorSlider />
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
  </form>
 );
};

export { ColorsForm };
