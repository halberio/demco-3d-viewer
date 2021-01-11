import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";
import { FrontLazerCanvas } from "./canvas/FrontLazerCanvas";
import { BackLazerCanvas } from "./canvas/BackLazerCanvas";

export type ILazerFormProps = {};

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
    <Row>
     <Col span={12}>
      <FrontLazerCanvas />
     </Col>
     <Col span={12}>
      <BackLazerCanvas />
     </Col>
    </Row>
   </Drawer>
  </form>
 );
};

export { LazerForm };
