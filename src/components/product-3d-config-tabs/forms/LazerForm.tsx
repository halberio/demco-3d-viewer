import React from "react";
import { Row, Col, Drawer } from "antd";
import { useForm } from "react-hook-form";
import { LazerOpenModalButton } from "./buttons/LazerOpenModalButton";
import { FrontLazerCanvas } from "./canvas/FrontLazerCanvas";
import { BackLazerCanvas } from "./canvas/BackLazerCanvas";
import { LazerCanvasConfigurator } from "./canvas-configurators/LazerCanvasConfigurator";

//@ts-ignore
import { useScreenshot, createFileName } from "use-react-screenshot";
import { OrderButton } from "./buttons/OrderButton";

export type ILazerFormProps = {};
const LazerForm: React.FC<ILazerFormProps> = ({}) => {
 const ref = React.useRef(null);
 const [image, takeScreenshot] = useScreenshot();

 const [drawerOpened, setDrawerOpened] = React.useState(false);

 const { register, control, handleSubmit, watch, errors } = useForm();
 const lazerbtnNext = document.getElementById("lazer-canvas-btn-next");
 const download = (image: any, { name = "img", extension = "png" } = {}) => {
  const a = document.createElement("a");
  a.href = image;
  a.download = createFileName(extension, name);
  a.click();
 };
 const screenShotHandler = React.useCallback(() => {
  takeScreenshot(ref.current);
  alert("check the code we have a screen shot");
  console.log(image);
 }, []);

 React.useEffect(() => {
  if (image) {
   console.log(image);
   // download the image async if we want
   //download(image, { name: "lorem-ipsum", extension: "png" });
   setDrawerOpened(false);
  }
 }, [image]);
 const onSubmit = (data: any) => {
  console.log(data);
  alert("error handling");
  if (errors) {
   setDrawerOpened(false);
   alert("error handling");
  }
  alert(data.details);
 };
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
      ref={register({ required: false })}
     />
    </Row>
    <div style={{ alignSelf: "flex-end", marginTop: "auto" }}>
     <OrderButton title="Next" />
    </div>
   </div>
   <Drawer
    height="calc(100vh)"
    placement="bottom"
    visible={drawerOpened}
    closable
    onClose={() => setDrawerOpened(false)}
   >
    <Row justify="center" style={{ width: "100%" }}>
     <h1>Identify Lazer Area</h1>
    </Row>
    <Row className="container-configurator" ref={ref}>
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

    <Row
     justify="center"
     align="middle"
     style={{
      marginTop: "1rem",
      zIndex: 99999999,
     }}
    >
     <button
      type="button"
      onClick={() => setDrawerOpened(false)}
      className="order-btn-h outlined-btn-h"
     >
      Discard
     </button>
     <button type="submit" onClick={screenShotHandler} className="order-btn-h">
      Confirm
     </button>
    </Row>
   </Drawer>
  </form>
 );
};

export { LazerForm };
