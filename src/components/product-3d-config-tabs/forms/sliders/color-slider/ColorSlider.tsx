import React from "react";
import "./color-slider.scss";
import ReactSlider from "react-slider";
import { Row, Col } from "antd";
export type IColorSliderProps = {};

interface TLabelProps {
 label: string;
 index: number;
 isCurrent: boolean;
}
const Label = ({ label, index, isCurrent }: TLabelProps) => (
 <div className={isCurrent ? "label-text current" : "label-text"} key={index}>
  {label}
 </div>
);
const ColorSlider: React.FC<IColorSliderProps> = ({}) => {
 const [currentValue, setCurrentValue] = React.useState(50);

 const getIsCurrent = (index: number, currentValue: number) => {
  switch (index) {
   case 0:
    return currentValue < 10;
   case 1:
    return currentValue > 40 && currentValue < 60;
   case 2:
    return currentValue > 90;
   default:
    return false;
  }
 };
 return (
  <div>
   <div className="slider-fabric-img">
    <img src={"/fabrics-assets/1.png"} alt="" />
   </div>
   <ReactSlider
    className="horizontal-slider-colors"
    thumbClassName="thumb"
    trackClassName="track"
    min={0}
    max={100}
    value={currentValue}
    onChange={(value: any) => setCurrentValue(value)}
    ariaValuetext={"hellow"}
    ariaLabel={["Lighter", "Medium blue", "Darker"]}
    renderThumb={(props, state) => <div {...props}></div>}
   />
   <div className="slider-colors-labels-row">
    {["Lighter", "Medium blue", "Darker"].map((label, index) => (
     <Label
      isCurrent={getIsCurrent(index, currentValue)}
      label={label}
      index={index}
     />
    ))}
   </div>
  </div>
 );
};

export { ColorSlider };
