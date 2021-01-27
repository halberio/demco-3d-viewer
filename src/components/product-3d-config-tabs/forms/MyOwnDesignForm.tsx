import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";
import { FrontMyOwnDesignCanvas } from "./canvas/FrontMyOwnDesignCanvas";
import { BackMyOwnDesignCanvas } from "./canvas/BackMyOwnDesignCanvas";
import { OwnDesignConfigurator } from "./canvas-configurators/OwnDesignConfigurator";

export type IMyOwnDesignFormProps = {};

const MyOwnDesignForm: React.FC<IMyOwnDesignFormProps> = ({}) => {
 const [drawerOpened, setDrawerOpened] = React.useState(false);

 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => console.log(data);
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <Row>
    <Col span={24}>
     <LazerOpenModalButton
      title="Add your design"
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
     <h1>Add your design</h1>
    </Row>
    <Row className="container-configurator">
     <Col span={12}>
      <FrontMyOwnDesignCanvas />
     </Col>
     <div className="configurator">
      <OwnDesignConfigurator />
     </div>
     <Col span={12}>
      <BackMyOwnDesignCanvas />
     </Col>
    </Row>
   </Drawer>
  </form>
 );
};

export { MyOwnDesignForm };
