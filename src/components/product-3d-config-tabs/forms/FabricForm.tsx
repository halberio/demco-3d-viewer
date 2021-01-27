import { Col, Row } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { OrderButton } from "./buttons/OrderButton";
import { FabricRadioButton } from "./radios/fabric-radio-button/FabricRadioButton";

export type IFabricFormProps = {
 setActiveTabKey: (s: string) => void;
};
const defaultList = [
 {
  id: "0",
  name: "none",
  selected: false,
  fabricUrl: null,
 },
 {
  id: "1",
  name: "fbr01",
  selected: false,
  fabricUrl: "/fabrics-assets/1.png",
 },
 {
  id: "2",
  name: "fbr02",
  selected: false,
  fabricUrl: "/fabrics-assets/2.png",
 },
 {
  id: "3",
  name: "fbr03",
  selected: false,
  fabricUrl: "/fabrics-assets/3.png",
 },
 {
  id: "4",
  name: "fbr04",
  selected: false,
  fabricUrl: "/fabrics-assets/4.png",
 },
 {
  id: "5",
  name: "fbr05",
  selected: false,
  fabricUrl: "/fabrics-assets/5.png",
 },
 {
  id: "6",
  name: "fbr06",
  selected: false,
  fabricUrl: "/fabrics-assets/6.png",
 },
 {
  id: "7",
  name: "fbr07",
  selected: false,
  fabricUrl: "/fabrics-assets/7.png",
 },
 {
  id: "8",
  name: "fbr08",
  selected: false,
  fabricUrl: "/fabrics-assets/8.png",
 },
 {
  id: "9",
  name: "fbr09",
  selected: false,
  fabricUrl: "/fabrics-assets/9.png",
 },
];
const FabricForm: React.FC<IFabricFormProps> = ({ setActiveTabKey }) => {
 const [radioSelectedIndex, setRadiosSelectedIndex] = React.useState(2);
 const [selectedItemObject, setSelectedItemObject] = React.useState<{
  id: string;
  name: string;
  selected: boolean;
  fabricUrl: any;
 }>({
  id: "0",
  name: "none",
  selected: false,
  fabricUrl: null,
 });
 const [fabricList, setFabricList] = React.useState(defaultList);
 const { register, control, handleSubmit, watch, errors } = useForm();

 const handleSelectionChange = React.useCallback((item, index) => {
  const tempArray = [...fabricList];
  tempArray.forEach((element, index) => {
   if (element.id === item.id) {
    tempArray[index].selected = true;
    setSelectedItemObject({
     id: element.id,
     name: element.name,
     selected: element.selected,
     fabricUrl: element.fabricUrl,
    });
   }
  });
  setFabricList(tempArray);

  setRadiosSelectedIndex(index);
 }, []);

 const onSubmit = (data: any) => {
  //traja3 el data mte3na bch npushiw'ha fi redux
  //PS : el select traja3 object fih label w el value
  alert("check the code");
  const submitData = { ...data, selectedItemObject };

  console.log(submitData);
  // we go to the next tab
  setActiveTabKey("3");
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <Row gutter={[24, 24]}>
     <Col span={24}>
      {fabricList.map((item, index) => (
       <FabricRadioButton
        key={index}
        onClick={() => handleSelectionChange(item, index)}
        selected={radioSelectedIndex === index && item.selected === true}
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
    <div style={{ alignSelf: "flex-end", marginTop: "auto" }}>
     <OrderButton title="Next" />
    </div>
   </div>
  </form>
 );
};

export { FabricForm };
