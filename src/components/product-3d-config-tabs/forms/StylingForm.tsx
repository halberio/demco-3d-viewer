import { Col, Row } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { OrderButton } from "./buttons/OrderButton";
import DropdownStyles from "./dropdowns/DropdownStyles";
export type IStylingFormProps = {
 setActiveTabKey: (s: string) => void;
};

const StylingForm: React.FC<IStylingFormProps> = ({ setActiveTabKey }) => {
 const { register, control, handleSubmit, watch, errors } = useForm();
 const onSubmit = (data: any) => {
  //traja3 el data mte3na bch npushiw'ha fi redux
  //PS : el select traja3 object fih label w el value
  alert("check the code");
  console.log(data);

  // we go to the next tab
  setActiveTabKey("2");
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
    <DropdownStyles
     classNameWrapper={"custom-select-tabs"}
     classNameInputWrapper="custom-select"
     options={[
      { label: "mzayen", value: "idmte3mzayen" },
      { label: "yfata9", value: "idmte3yfata9" },
     ]}
     name="style"
     placeholder="Style"
     control={control}
    />
    <textarea
     placeholder="More Details"
     className="textarea-custom"
     rows={3}
     name="details"
     ref={register({ required: true })}
    />

    <div style={{ alignSelf: "flex-end", marginTop: "auto" }}>
     <OrderButton title="Next" />
    </div>
   </div>
  </form>
 );
};

export { StylingForm };
