import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";

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
    placement="bottom"
    visible={drawerOpened}
    closable
    onClose={() => setDrawerOpened(false)}
   >
    <h1>lazer drawer</h1>
    <p>
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sint,
     repellendus pariatur consequatur delectus dolores, quidem cupiditate
     voluptate accusamus unde magni explicabo architecto! Ipsum adipisci
     repellat quis eos ea incidunt.
    </p>
   </Drawer>
  </form>
 );
};

export { LazerForm };
