import { Col, Row } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { FabricRadioButton } from "./radios/fabric-radio-button/FabricRadioButton";

export type IFabricFormProps = {};

const FabricForm: React.FC<IFabricFormProps> = () => {
 const [radioSelectedIndex, setRadiosSelectedIndex] = React.useState(2);
 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => console.log(data);

 const defaultList = [
  {
   name: "none",
   selected: false,
   fabricUrl: null,
  },
  {
   name: "fbr01",
   selected: false,
   fabricUrl: "/fabrics-assets/1.png",
  },
  {
   name: "fbr02",
   selected: false,
   fabricUrl: "/fabrics-assets/2.png",
  },
  {
   name: "fbr03",
   selected: false,
   fabricUrl: "/fabrics-assets/3.png",
  },
  {
   name: "fbr04",
   selected: false,
   fabricUrl: "/fabrics-assets/4.png",
  },
  {
   name: "fbr05",
   selected: false,
   fabricUrl: "/fabrics-assets/5.png",
  },
  {
   name: "fbr06",
   selected: false,
   fabricUrl: "/fabrics-assets/6.png",
  },
  {
   name: "fbr07",
   selected: false,
   fabricUrl: "/fabrics-assets/7.png",
  },
  {
   name: "fbr08",
   selected: false,
   fabricUrl: "/fabrics-assets/8.png",
  },
  {
   name: "fbr09",
   selected: false,
   fabricUrl: "/fabrics-assets/9.png",
  },
 ];
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   {/* register your input into the hook by invoking the "register" function */}
   <Row gutter={[24, 24]}>
    <Col span={24}>
     {defaultList.map((item, index) => (
      <FabricRadioButton
       key={index}
       onClick={() => setRadiosSelectedIndex(index)}
       selected={radioSelectedIndex === index}
       fabricUrl={item.fabricUrl}
       name={item.name}
      />
     ))}
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

export { FabricForm };
