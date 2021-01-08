import { Col, Row } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import DropdownStyles from "./dropdowns/DropdownStyles";
export type IStylingFormProps = {};

const StylingForm: React.FC<IStylingFormProps> = ({}) => {
 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => console.log(data);

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   {/* register your input into the hook by invoking the "register" function */}
   <Row>
    <Col span={24}>
     <DropdownStyles
      classNameWrapper={"custom-select-tabs"}
      classNameInputWrapper="custom-select"
      options={[{ label: "style1", value: "style" }]}
      name="style"
      placeholder="Style"
      control={control}
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
  </form>
 );
};

export { StylingForm };
