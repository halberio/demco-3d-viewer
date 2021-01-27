import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";
import { FrontLazerCanvas } from "./canvas/FrontLazerCanvas";
import { BackLazerCanvas } from "./canvas/BackLazerCanvas";
import { LazerCanvasConfigurator } from "./canvas-configurators/LazerCanvasConfigurator";

export type ILazerFormProps = {};

//TODO: Moez please take in consideration : that we recommande submit a screen shot of the canvas after you get the config
// ya3ni : ba3d mè el user yraka7 fazetou a3mel screen shot 3al canvas b ay librairy w a3mel submit lel photo
const LazerForm: React.FC<ILazerFormProps> = ({}) => {
 const [drawerOpened, setDrawerOpened] = React.useState(false);

 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => console.log(data);
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <Row>
    <Col span={24}>
     <LazerOpenModalButton
      title="You can change the laser design "
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
     <h1>Identify Lazer Area</h1>
    </Row>
    <Row className="container-configurator">
     <Col span={12}>
      <FrontLazerCanvas />
     </Col>
     <div className="configurator">
      <LazerCanvasConfigurator />
     </div>
     <Col span={12}>
      <BackLazerCanvas />
     </Col>
    </Row>
   </Drawer>
  </form>
 );
};

export { LazerForm };
