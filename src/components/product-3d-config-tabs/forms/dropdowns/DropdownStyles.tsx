import * as React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

interface IDropdownStylesProps {
 name: string;
 placeholder: string;
 control: any;
 options: any[];
 classNameWrapper?: string;
 classNameInputWrapper?: string;
 optionLabel?: string;
 optionValue?: string;
 error?: string;
 type?: string;
 label?: string;
}
const DropdownStyles = (props: IDropdownStylesProps) => {
 const {
  label,
  control,
  options,
  optionLabel,
  optionValue,
  name,
  placeholder,
  error,
  classNameWrapper,
  classNameInputWrapper,
 } = props;

 const customStyles = {
  control: () => ({
   margin: "1rem",
   display: "flex",
   border: "1px solid #CECECE",
   alignItems: "center",
   borderRadius: 5,
   minHeight: "70px",
  }),
 };

 return (
  <div
   className={`select-input-wrapper ${
    classNameWrapper ? classNameWrapper : ""
   }`}
  >
   {label ? <label className="select-input-label">{label}</label> : null}
   <div
    className={`select-input-input ${
     classNameInputWrapper ? classNameInputWrapper : ""
    }`}
   >
    <Controller
     placeholder={placeholder}
     name={name}
     control={control}
     options={options}
     defaultValue=""
     as={
      <Select
       styles={customStyles}
       getOptionLabel={(option: any) => option.label}
       getOptionValue={(option: any) => option.value}
      />
     }
    />
   </div>
   {error ? <div className="form-input-errors">{error}</div> : null}
  </div>
 );
};

export default DropdownStyles;
