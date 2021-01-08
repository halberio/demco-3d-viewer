import React from "react";
import "./fabric-radio-button.scss";
export type IFabricRadioButtonProps = {
 selected: boolean;
 fabricUrl: any;
 name: string;
 onClick: () => void;
};

const FabricRadioButton: React.FC<IFabricRadioButtonProps> = ({
 selected,
 fabricUrl,
 name,
 onClick,
}) => {
 return (
  <button
   {...{ onClick }}
   type="button"
   className={selected ? "fabric-radio-button selected" : "fabric-radio-button"}
  >
   <div className="content-container-radio">
    {fabricUrl !== null && (
     <img className="img-fabric-radio" src={fabricUrl} alt={name} />
    )}
    {!fabricUrl && <div className="bar-rotated" />}
   </div>
  </button>
 );
};

export { FabricRadioButton };
