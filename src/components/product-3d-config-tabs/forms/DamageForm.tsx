import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";
import { DamageCanvasConfigurator } from "./canvas-configurators/DamageCanvasConfigurator";
import { BackDamageCanvas } from "./canvas/BackDamageCanvas";
import { FrontDamageCanvas } from "./canvas/FrontDamageCanvas";

export type IDamageFormProps = {};

const DamageForm: React.FC<IDamageFormProps> = ({}) => {
 const [drawerOpened, setDrawerOpened] = React.useState(false);

 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => console.log(data);
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
    height="calc(100vh - 129px)"
    placement="bottom"
    visible={drawerOpened}
    closable
    onClose={() => setDrawerOpened(false)}
   >
    <Row justify="center" style={{ width: "100%" }}>
     <h1>Identify Damages Area</h1>
    </Row>
    <Row className="container-configurator">
     <Col span={12}>
      <FrontDamageCanvas />
     </Col>
     <div className="configurator">
      <DamageCanvasConfigurator />
     </div>
     <Col span={12}>
      <BackDamageCanvas />
     </Col>
    </Row>
   </Drawer>
  </form>
 );
};

export { DamageForm };
